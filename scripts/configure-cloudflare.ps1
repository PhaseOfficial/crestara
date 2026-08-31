param (
    [Parameter(Mandatory=$true)]
    [string]$ApiToken,

    [string]$ServerIp = "104.160.240.35",
    [string]$Domain = "elysianglobalservices.com"
)

$headers = @{
    "Authorization" = "Bearer $ApiToken"
    "Content-Type"  = "application/json"
}

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "Configuring Cloudflare DNS & SSL for $Domain" -ForegroundColor Cyan
Write-Host "Target WebZim Server IP: $ServerIp" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# 1. Fetch Zone ID
Write-Host "[1/5] Fetching Zone ID for $Domain..." -ForegroundColor Yellow
try {
    $zoneRes = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones?name=$Domain" -Headers $headers -Method Get
    if (-not $zoneRes.success -or $zoneRes.result.Count -eq 0) {
        Write-Error "Could not find zone for domain: $Domain. Check API Token permissions."
        exit 1
    }
    $zoneId = $zoneRes.result[0].id
    Write-Host "Zone ID found: $zoneId" -ForegroundColor Green
} catch {
    Write-Error "API Authentication error: $_"
    exit 1
}

# 2. Fetch Existing DNS Records
Write-Host "[2/5] Checking existing DNS records..." -ForegroundColor Yellow
$recordsRes = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Headers $headers -Method Get
$existingRecords = $recordsRes.result

function Set-DnsRecord {
    param ($Type, $Name, $Content, $Proxied)
    
    $existing = $existingRecords | Where-Object { $_.type -eq $Type -and ($_.name -eq $Name -or $_.name -eq "$Name.$Domain") }
    
    $body = @{
        type    = $Type
        name    = $Name
        content = $Content
        proxied = $Proxied
        ttl     = 1 # Auto TTL
    } | ConvertTo-Json

    if ($existing) {
        Write-Host "Updating existing $Type record for $Name -> $Content (Proxied: $Proxied)..." -ForegroundColor Yellow
        $res = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records/$($existing.id)" -Headers $headers -Method Put -Body $body
    } else {
        Write-Host "Creating new $Type record for $Name -> $Content (Proxied: $Proxied)..." -ForegroundColor Yellow
        $res = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Headers $headers -Method Post -Body $body
    }

    if ($res.success) {
        Write-Host "✓ $Type record for $Name configured successfully." -ForegroundColor Green
    } else {
        Write-Warning "Failed to set $Type record: $($res.errors | ConvertTo-Json)"
    }
}

# 3. Configure A and CNAME Records
Write-Host "[3/5] Setting Root (@) and WWW DNS Records..." -ForegroundColor Yellow
Set-DnsRecord -Type "A" -Name "@" -Content $ServerIp -Proxied $true
Set-DnsRecord -Type "CNAME" -Name "www" -Content $Domain -Proxied $true
Set-DnsRecord -Type "A" -Name "mail" -Content $ServerIp -Proxied $false

# 4. Set SSL/TLS Mode to Full
Write-Host "[4/5] Setting SSL/TLS Mode to 'Full'..." -ForegroundColor Yellow
try {
    $sslBody = @{ value = "full" } | ConvertTo-Json
    $sslRes = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/settings/ssl" -Headers $headers -Method Patch -Body $sslBody
    if ($sslRes.success) {
        Write-Host "✓ SSL/TLS mode set to 'Full'." -ForegroundColor Green
    }
} catch {
    Write-Warning "Could not update SSL setting via API (may require Zone.SSL edit permission)."
}

# 5. Enable Always Use HTTPS
Write-Host "[5/5] Enabling Always Use HTTPS..." -ForegroundColor Yellow
try {
    $httpsBody = @{ value = "on" } | ConvertTo-Json
    $httpsRes = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/settings/always_use_https" -Headers $headers -Method Patch -Body $httpsBody
    if ($httpsRes.success) {
        Write-Host "✓ 'Always Use HTTPS' enabled." -ForegroundColor Green
    }
} catch {
    Write-Warning "Could not update HTTPS setting via API."
}

Write-Host "==================================================" -ForegroundColor Green
Write-Host "Cloudflare configuration completed successfully!" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Green
