
# Manual Deployment Instructions

Your Next.js project has been built and exported to static files in the './out' directory.

To deploy to your AWS Shared hosting:

## Option 1: Using WinSCP (Recommended)
1. Download and install WinSCP from https://winscp.net/
2. Open WinSCP and create a new session with these settings:
   - File protocol: SFTP
   - Host name: agilebrokersgh.com
   - Port number: 22
   - User name: all76
   - Password: @0248290189Z
3. Connect to the server
4. Navigate to: /public_html
5. Upload all files from: C:\agile_final\out

## Option 2: Using FileZilla
1. Download and install FileZilla from https://filezilla-project.org/
2. Use the same connection details as above
3. Upload all files from the './out' directory to '/public_html'

## Option 3: Using cPanel File Manager
1. Log into your cPanel at: https://agilebrokersgh.com/cpanel
2. Username: all76
3. Password: @0248290189Z
4. Open File Manager
5. Navigate to public_html
6. Upload all files from: C:\agile_final\out

## Files to Upload
All files in the './out' directory, including:
- index.html
- All subdirectories (about-us, contact-us, etc.)
- _next directory (contains CSS, JS, and images)
- All other static assets

## After Upload
Your website should be live at: https://agilebrokersgh.com

## Troubleshooting
- Make sure all files are uploaded to the correct directory
- Check file permissions (should be 644 for files, 755 for directories)
- Clear browser cache if changes don't appear immediately
