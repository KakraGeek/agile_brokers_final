#!/usr/bin/env node

/**
 * Vercel Deployment Script
 * This script deploys the built project to Vercel
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Vercel deployment...');

// Check if Vercel CLI is installed
try {
    execSync('vercel --version', { stdio: 'pipe' });
    console.log('✅ Vercel CLI is installed');
} catch (error) {
    console.log('📦 Installing Vercel CLI...');
    execSync('npm install -g vercel', { stdio: 'inherit' });
}

// Deploy to Vercel
console.log('🌐 Deploying to Vercel...');
try {
    execSync('vercel --prod', { stdio: 'inherit' });
    console.log('✅ Vercel deployment completed successfully!');
} catch (error) {
    console.error('❌ Vercel deployment failed');
    process.exit(1);
}

console.log('\n📋 Vercel Deployment Summary:');
console.log('🌐 Your site should be live on Vercel');
console.log('📁 Build directory: out/');
console.log('🔗 Check your Vercel dashboard for the live URL');
