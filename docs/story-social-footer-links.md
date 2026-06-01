\# Story: Add Client Social Media Links to Footer Icons



\## Status

READY



\## Objective

Update the Agile Insurance Brokers website footer social media icons so that the LinkedIn and Facebook icons link to the official client-provided social media accounts.



\## Client-provided links

\- LinkedIn: https://www.linkedin.com/in/agile-insurance-brokers-817b47357

\- Facebook: https://www.facebook.com/share/1PMfh4PNgG/



\## Scope

Update only the existing footer social media icon links.



\## Requirements

1\. Locate the footer component or layout section that renders social media icons.

2\. Update the LinkedIn icon link to:

&#x20;  https://www.linkedin.com/in/agile-insurance-brokers-817b47357

3\. Update the Facebook icon link to:

&#x20;  https://www.facebook.com/share/1PMfh4PNgG/

4\. Preserve the existing visual design, spacing, icon style, hover effects, and responsive behaviour.

5\. Do not redesign the footer.

6\. Do not change unrelated content.

7\. External links should open in a new tab using:

&#x20;  target="\_blank"

&#x20;  rel="noopener noreferrer"

8\. If social links are stored in a central constants/config file, update that source rather than hardcoding duplicate links elsewhere.



\## Acceptance Criteria

\- The footer displays the existing LinkedIn and Facebook icons.

\- Clicking the LinkedIn icon opens the provided LinkedIn URL.

\- Clicking the Facebook icon opens the provided Facebook URL.

\- No layout regression occurs on desktop or mobile.

\- The app runs successfully with the existing dev/build command.

\- Git diff shows only files directly related to the footer/social-link update.



\## Verification Commands

Run whichever commands are valid for this project:



```bash

npm run dev

npm run build

