BikeBusters 2026 Rally Tracker - PWA v2

CHANGES IN THIS VERSION
- Updated to the new 176.59-mile route.
- Blue routing-only waypoints are excluded.
- Records arrival and departure at each control.
- Calculates actual stop duration.
- CSV export includes arrival, departure, pace and stop duration.
- Start HQ uses a Start / depart button; finish HQ uses Arrived now.

FILES
- index.html
- manifest.webmanifest
- sw.js
- icons/icon-192.png
- icons/icon-512.png

HOSTING
A PWA must be served from HTTPS, or from localhost while testing. Opening index.html directly from a file:// path will run the tracker, but the service worker and installation features will not work.

QUICK TEST
1. In this folder, run a local web server, for example:
   python -m http.server 8000
2. Open http://localhost:8000 in Chrome or Edge.
3. Reload once and check that the install option appears.
4. Switch the device offline and reopen the app to confirm offline operation.

DEPLOYMENT
Upload the complete folder contents to the same static HTTPS host, replacing the old files. Keep the relative folder structure unchanged. The service-worker cache name has been changed so the installed app can update.

DATA
Ride records are stored in localStorage on the device/browser where the app is used. Clearing browser/site data removes those records, so use the CSV export as a backup.
