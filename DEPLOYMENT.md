# Agile Insurance Brokers - Deployment Guide

This guide will help you deploy your Next.js website to AWS Shared hosting via SFTP.

## 🚀 Quick Deployment

### Option 1: Using the Deployment Script (Recommended)

1. **Run the deployment script:**
   ```bash
   npm run deploy
   ```
   or
   ```bash
   node deploy.js
   ```

2. **Follow the generated instructions** in `deployment-instructions.md`

### Option 2: Manual Build and Deploy

1. **Build the project:**
   ```bash
   npm run deploy:build
   ```

2. **Upload files manually** using one of the methods below

## 📤 Upload Methods

### Method 1: WinSCP (Recommended for Windows)

1. Download WinSCP from https://winscp.net/
2. Create a new session with these settings:
   - **File protocol:** SFTP
   - **Host name:** agilebrokersgh.com
   - **Port number:** 22
   - **User name:** all76
   - **Password:** @0248290189Z
3. Connect to the server
4. Navigate to `/public_html`
5. Upload all files from the `out` directory

### Method 2: FileZilla (Cross-platform)

1. Download FileZilla from https://filezilla-project.org/
2. Use the same connection details as above
3. Upload all files from the `out` directory to `/public_html`

### Method 3: cPanel File Manager

1. Log into cPanel at: https://agilebrokersgh.com/cpanel
2. Username: all76
3. Password: @0248290189Z
4. Open File Manager
5. Navigate to `public_html`
6. Upload all files from the `out` directory

## 📁 Files to Upload

After running the build process, upload **all files** from the `out` directory, including:

- `index.html` (homepage)
- `about-us/` directory
- `contact-us/` directory
- `partners-clients/` directory
- `_next/` directory (contains CSS, JS, and images)
- All other static assets

## 🔧 Configuration

Your hosting details:
- **Domain:** agilebrokersgh.com
- **Username:** all76
- **Password:** @0248290189Z
- **Upload Directory:** /public_html
- **Protocol:** SFTP
- **Port:** 22

## 🐛 Troubleshooting

### Common Issues:

1. **Files not appearing on website:**
   - Clear browser cache
   - Check file permissions (644 for files, 755 for directories)
   - Ensure all files are uploaded to the correct directory

2. **Images not loading:**
   - Verify the `_next` directory is uploaded
   - Check image paths in the code

3. **Styling issues:**
   - Ensure CSS files in `_next/static/css/` are uploaded
   - Check file permissions

4. **Build errors:**
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors with `npm run type-check`

## 📋 Pre-deployment Checklist

- [ ] All dependencies are installed (`npm install`)
- [ ] Project builds successfully (`npm run build`)
- [ ] Static export works (`npm run export`)
- [ ] All files are present in the `out` directory
- [ ] SFTP client is configured with correct credentials
- [ ] Target directory (`/public_html`) is accessible

## 🎯 Post-deployment Verification

After uploading:

1. **Visit your website:** https://agilebrokersgh.com
2. **Check all pages** load correctly
3. **Verify images** are displaying
4. **Test contact forms** and other interactive elements
5. **Check mobile responsiveness**

## 🔄 Updating the Website

To update your website:

1. Make your changes to the code
2. Run `npm run deploy` again
3. Upload the new files from the `out` directory
4. Replace existing files on the server

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify your hosting credentials
3. Ensure all files are uploaded correctly
4. Contact your hosting provider if SFTP access is blocked

---

**Note:** This deployment process creates static files that work on any web hosting service. The website will be fast and SEO-friendly, perfect for a business website like Agile Insurance Brokers.
