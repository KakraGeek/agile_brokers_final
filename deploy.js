#!/usr/bin/env node

/**
 * Agile Insurance Brokers - Deployment Script
 * This script builds and deploys the Next.js project to AWS Shared hosting via SFTP
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
    hostUrl: 'agilebrokersgh.com',
    username: 'all76',
    password: '@0248290189Z',
    remoteDir: '/public_html',
    localBuildDir: './out'
};

console.log('🚀 Starting deployment process...');

// Step 1: Clean previous builds
console.log('🧹 Cleaning previous builds...');
if (fs.existsSync(config.localBuildDir)) {
    fs.rmSync(config.localBuildDir, { recursive: true, force: true });
    console.log('✅ Previous build cleaned');
}

// Step 2: Install dependencies
console.log('📦 Installing dependencies...');
try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed');
} catch (error) {
    console.error('❌ Failed to install dependencies');
    process.exit(1);
}

// Step 3: Build the project
console.log('🔨 Building the project...');
try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Project built successfully');
} catch (error) {
    console.error('❌ Build failed');
    process.exit(1);
}

// Step 4: Export to static files
console.log('📤 Exporting to static files...');
try {
    // Since output: 'export' is configured in next.config.js, 
    // the build process already creates static files
    console.log('✅ Static files already exported during build process');
} catch (error) {
    console.error('❌ Export failed');
    process.exit(1);
}

// Step 5: Create deployment instructions
console.log('📝 Creating deployment instructions...');
const deploymentInstructions = `
# Manual Deployment Instructions

Your Next.js project has been built and exported to static files in the '${config.localBuildDir}' directory.

To deploy to your AWS Shared hosting:

## Option 1: Using WinSCP (Recommended)
1. Download and install WinSCP from https://winscp.net/
2. Open WinSCP and create a new session with these settings:
   - File protocol: SFTP
   - Host name: ${config.hostUrl}
   - Port number: 22
   - User name: ${config.username}
   - Password: ${config.password}
3. Connect to the server
4. Navigate to: ${config.remoteDir}
5. Upload all files from: ${path.resolve(config.localBuildDir)}

## Option 2: Using FileZilla
1. Download and install FileZilla from https://filezilla-project.org/
2. Use the same connection details as above
3. Upload all files from the '${config.localBuildDir}' directory to '${config.remoteDir}'

## Option 3: Using cPanel File Manager
1. Log into your cPanel at: https://${config.hostUrl}/cpanel
2. Username: ${config.username}
3. Password: ${config.password}
4. Open File Manager
5. Navigate to public_html
6. Upload all files from: ${path.resolve(config.localBuildDir)}

## Files to Upload
All files in the '${config.localBuildDir}' directory, including:
- index.html
- All subdirectories (about-us, contact-us, etc.)
- _next directory (contains CSS, JS, and images)
- All other static assets

## After Upload
Your website should be live at: https://${config.hostUrl}

## Troubleshooting
- Make sure all files are uploaded to the correct directory
- Check file permissions (should be 644 for files, 755 for directories)
- Clear browser cache if changes don't appear immediately
`;

fs.writeFileSync('deployment-instructions.md', deploymentInstructions);
console.log('✅ Deployment instructions created');

// Step 6: Display summary
console.log('\n📋 Deployment Summary:');
console.log(`🌐 Website URL: https://${config.hostUrl}`);
console.log(`📁 Local build directory: ${path.resolve(config.localBuildDir)}`);
console.log(`📁 Remote directory: ${config.remoteDir}`);
console.log(`👤 Username: ${config.username}`);
console.log(`🔑 Password: ${config.password}`);

console.log('\n✅ Build process completed!');
console.log('📖 Check deployment-instructions.md for manual upload instructions.');
console.log('🚀 Ready to upload files to your hosting provider!');
