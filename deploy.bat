@echo off
echo 🚀 Agile Insurance Brokers - Deployment Script
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Run the deployment script
echo 📦 Running deployment script...
node deploy.js

echo.
echo ✅ Deployment script completed!
echo 📖 Check deployment-instructions.md for upload instructions.
pause
