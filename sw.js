BikeBusters 2026 Rally Tracker - PWA v3

Upload the CONTENTS of this folder to the root of the GitHub repository:
- index.html
- manifest.webmanifest
- sw.js
- icons folder

This update:
- shifts the whole timetable automatically from the actual HQ start time
- removes the date and manual start-time adjustment
- removes mileage from the app and CSV
- enforces the route in sequence
- shows full Status and Next Stop descriptions
- adds the new BikeBusters logo and app icon
- keeps arrival, departure and stop-duration recording

The local-storage key is unchanged, so existing v2 ride records remain available.
The service-worker cache is now bikebusters-2026-v3.
