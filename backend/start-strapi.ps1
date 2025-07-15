# PowerShell script to run Strapi with proper permissions
# Run this script as Administrator if you encounter permission issues

# Set execution policy for this session
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force

# Change to the script directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

# Clean up any existing temp files
Write-Host "Cleaning up temporary files..." -ForegroundColor Green
try {
    Get-ChildItem -Path $env:TEMP -Filter "strapi-upload*" -Recurse -Force -ErrorAction SilentlyContinue | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue
    Write-Host "Temporary files cleaned up successfully." -ForegroundColor Green
} catch {
    Write-Host "Some temporary files could not be cleaned up. This is normal." -ForegroundColor Yellow
}

# Start Strapi
Write-Host "Starting Strapi..." -ForegroundColor Green
npm run develop
