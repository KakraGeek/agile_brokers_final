@echo off
echo 🚀 Starting build process for Agile Insurance Brokers...

echo 🧹 Cleaning previous builds...
if exist "out" rmdir /s /q "out" 2>nul
if exist ".next" rmdir /s /q ".next" 2>nul
if exist "build" rmdir /s /q "build" 2>nul

echo 📦 Installing dependencies...
call npm install

echo 🔨 Building the project...
call npm run build

echo ✅ Build completed!
echo 📁 Check the 'out' directory for your built files.
pause
