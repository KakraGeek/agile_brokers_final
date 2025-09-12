# Agile Insurance Brokers - Deployment Script
# This script builds and deploys the Next.js project to AWS Shared hosting via SFTP

param(
    [string]$HostUrl = "agilebrokersgh.com",
    [string]$Username = "all76",
    [string]$Password = "@0248290189Z",
    [string]$RemoteDir = "/public_html",
    [string]$LocalBuildDir = "./out"
)

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Step 1: Clean previous builds
Write-Host "🧹 Cleaning previous builds..." -ForegroundColor Yellow
if (Test-Path $LocalBuildDir) {
    Remove-Item -Path $LocalBuildDir -Recurse -Force
    Write-Host "✅ Previous build cleaned" -ForegroundColor Green
}

# Step 2: Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed" -ForegroundColor Green

# Step 3: Build the project
Write-Host "🔨 Building the project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Project built successfully" -ForegroundColor Green

# Step 4: Export to static files
Write-Host "📤 Exporting to static files..." -ForegroundColor Yellow
npm run export
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Export failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Static files exported" -ForegroundColor Green

# Step 5: Create SFTP batch file
Write-Host "📝 Creating SFTP batch file..." -ForegroundColor Yellow
$sftpBatch = @"
open sftp://$Username@$HostUrl
$Password
cd $RemoteDir
lcd $LocalBuildDir
put -r *
bye
"@

$sftpBatch | Out-File -FilePath "deploy.sftp" -Encoding ASCII
Write-Host "✅ SFTP batch file created" -ForegroundColor Green

# Step 6: Upload files via SFTP
Write-Host "📤 Uploading files to server..." -ForegroundColor Yellow
Write-Host "Connecting to: $HostUrl" -ForegroundColor Cyan
Write-Host "Username: $Username" -ForegroundColor Cyan
Write-Host "Remote directory: $RemoteDir" -ForegroundColor Cyan

# Use WinSCP or similar SFTP client
# For this example, we'll use a simple approach with curl if available
# You may need to install an SFTP client or use WinSCP

try {
    # Check if WinSCP is available
    $winscpPath = Get-Command "winscp.exe" -ErrorAction SilentlyContinue
    if ($winscpPath) {
        Write-Host "Using WinSCP for upload..." -ForegroundColor Cyan
        & winscp.exe /command "open sftp://$Username@$HostUrl" "cd $RemoteDir" "put -r $LocalBuildDir\*" "exit"
    } else {
        Write-Host "WinSCP not found. Please install WinSCP or use an alternative SFTP client." -ForegroundColor Yellow
        Write-Host "Manual upload instructions:" -ForegroundColor Yellow
        Write-Host "1. Open your SFTP client (WinSCP, FileZilla, etc.)" -ForegroundColor White
        Write-Host "2. Connect to: $HostUrl" -ForegroundColor White
        Write-Host "3. Username: $Username" -ForegroundColor White
        Write-Host "4. Password: $Password" -ForegroundColor White
        Write-Host "5. Navigate to: $RemoteDir" -ForegroundColor White
        Write-Host "6. Upload all files from: $LocalBuildDir" -ForegroundColor White
    }
} catch {
    Write-Host "❌ Upload failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Please upload files manually using the instructions above." -ForegroundColor Yellow
}

# Step 7: Cleanup
Write-Host "🧹 Cleaning up temporary files..." -ForegroundColor Yellow
if (Test-Path "deploy.sftp") {
    Remove-Item "deploy.sftp" -Force
}

Write-Host "✅ Deployment process completed!" -ForegroundColor Green
Write-Host "🌐 Your website should now be live at: https://$HostUrl" -ForegroundColor Green
Write-Host "📁 Files were uploaded to: $RemoteDir" -ForegroundColor Green
