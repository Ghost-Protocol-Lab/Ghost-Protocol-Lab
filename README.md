# Ghost-Protocol-Lab
This is just who we are and what we do and why we do it!

## Adding an event

1. Open `/assets/js/events-data.js` and copy the commented event template into the `GHPL_EVENTS` array.
2. Replace the placeholder values, especially the unique `id`, title, ISO start/end times, mode, description, agenda, and registration URL.
3. Save the file and deploy the site. The Events page, Free Stuff preview, event details modal, local-time display, deep link, and `.ics` calendar download update automatically.

Use ISO-8601 timestamps with an explicit timezone offset, for example `2026-12-20T18:00:00+05:30`. Leave `registerUrl` empty when registration is not open; the page will show a disabled registration state.
