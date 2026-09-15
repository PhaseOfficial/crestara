# ==============================================================================
# Crestara Advisory Group - cPanel Packaging Script
# Creates a production-ready ZIP archive directly uploadable to cPanel File Manager
# ==============================================================================

$ErrorActionPreference = "Stop"

$rootDir = Split-Path -Parent $PSScriptRoot
$distDir = Join-Path $rootDir "dist"
$zipPath = Join-Path $rootDir "crestara-cpanel-dist.zip"

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " Packaging Crestara for cPanel Deployment         " -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# 1. Check dist directory
if (-not (Test-Path $distDir)) {
    Write-Error "The 'dist' directory does not exist! Please run 'npm run build' first."
    exit 1
}

# 2. Check critical files
$criticalFiles = @("index.html", ".htaccess", "sitemap.xml", "robots.txt")
foreach ($file in $criticalFiles) {
    $filePath = Join-Path $distDir $file
    if (-not (Test-Path $filePath)) {
        Write-Warning "Critical file missing in dist: $file"
    } else {
        Write-Host " [OK] Verified $file" -ForegroundColor Green
    }
}

# 3. Remove old zip if exists
if (Test-Path $zipPath) {
    Write-Host " Removing existing archive..." -ForegroundColor Yellow
    Remove-Item -Force $zipPath
}

# 4. Create zip archive
Write-Host " Compressing dist directory into crestara-cpanel-dist.zip..." -ForegroundColor Yellow
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory((Resolve-Path $distDir), $zipPath, [System.IO.Compression.CompressionLevel]::Optimal, $false)

# 5. Verify ZIP contents
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$entryCount = $zip.Entries.Count
$hasHtaccess = $zip.Entries | Where-Object { $_.FullName -eq ".htaccess" }
$hasIndex = $zip.Entries | Where-Object { $_.FullName -eq "index.html" }
$zip.Dispose()

$zipSize = (Get-Item $zipPath).Length
$zipSizeFormatted = "{0:N2} MB" -f ($zipSize / 1MB)

Write-Host "==================================================" -ForegroundColor Green
Write-Host " Packaging Completed Successfully!               " -ForegroundColor Green
Write-Host " Archive:   $zipPath" -ForegroundColor White
Write-Host " Size:      $zipSizeFormatted" -ForegroundColor White
Write-Host " Files:     $entryCount entries" -ForegroundColor White
Write-Host " .htaccess: $(if ($hasHtaccess) { '[OK] Included' } else { '[FAIL] Missing' })" -ForegroundColor $(if ($hasHtaccess) { "Green" } else { "Red" })
Write-Host " index.html: $(if ($hasIndex) { '[OK] Included' } else { '[FAIL] Missing' })" -ForegroundColor $(if ($hasIndex) { "Green" } else { "Red" })
Write-Host "==================================================" -ForegroundColor Green
Write-Host "Ready for upload to cPanel public_html/ directory." -ForegroundColor Cyan
