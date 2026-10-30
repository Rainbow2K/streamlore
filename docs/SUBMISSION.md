# Codex x TwitchCon — application draft
Status: PREPARATION ONLY, NOT SUBMITTED. Do not submit until real Twitch path is verified and required fields are complete.

## Project name
StreamLore

## Tagline
Good streams end. The moments stay.

## Inspiration
Live communities create moments that disappear into a stream’s timeline. We wanted viewers to keep a small, personal record of the stories they helped create, without turning community participation into a marketplace.

## What it does — current, honest draft
StreamLore turns a six-chapter channel story into a collection of animated digital cards. Distinct chat participants help unlock a chapter, then claim a non-transferable card associated with their Twitch user ID. Rarity is a narrative label, not a price or randomized chance. Earlier unlocked chapters remain available, so viewers can return without losing progress.
The current hosted demo simulates chat events and stores a demo album locally. The repository also contains a local Twitch OAuth and EventSub WebSocket bridge with a broadcaster-controlled chapter command and an OBS overlay. This bridge has not yet been tested with a live Twitch account. NOVA is an original adult anthropomorphic cat character; the cards are animated SVG illustrations, not actual stream clips.

## How we built it
Built with OpenAI Codex using HTML, CSS, JavaScript modules and Node.js built-ins. Codex helped develop the visual system, original SVG artwork, state model, local Twitch adapter, tests and documentation. The same deterministic state model powers demo interactions and the local chat adapter. Browser tests checked the demo unlock, reveal and collection flow. Live Twitch validation is still pending.

## Challenges
Separating theatrical card reveals from real Twitch events; keeping rewards deterministic; ensuring that repeated messages from one account do not unlock a community goal; making a missed chapter recoverable; and protecting OAuth tokens in a local prototype.

## Accomplishments
A working interactive demo, original art system, tested unlock and claim logic, a local Twitch integration implementation and a reproducible run guide. No user adoption, retention uplift or live Twitch validation claimed.

## What we learned
A collectible moment can build a shared story without purchases or artificial scarcity. Authentic platform integration and clear boundaries between simulation and real events matter as much as visual polish.

## What’s next
First validate the Twitch bridge against an authorized channel. Then add creator-owned clips, an authenticated viewer album, moderation and retention controls, and a season editor. Trading, cash value and paid reward advantages remain outside scope.

## Built with
OpenAI Codex; JavaScript; HTML; CSS; SVG; Node.js; implemented Twitch OAuth + EventSub WebSocket (live validation pending).

## Required fields still missing
- Repository: https://github.com/Rainbow2K/streamlore (public source repository).
- Public YouTube film below 3 minutes showing the real project on Twitch and use of Codex. Not generated yet.
- Exact Codex session ID from the thread where most work happened. Retrieve from supported Codex session UI or /status; do not invent it.
- Entrant account, country/residency and required acknowledgements in Devpost.
- Replace all pending live-validation statements only after successful test. Do not imply footage exists.

## Film script, target 2:35
0:00–0:20: Explain the problem and the one-line promise. Show NOVA and declare it fictional original art.
0:20–0:45: Show real Twitch channel, local bridge connected and OBS overlay.
0:45–1:15: Three distinct chat participants send !moment. Show the actual overlay responding, not the simulator.
1:15–1:40: !claim, inspect the saved entry; demonstrate one account cannot claim twice. Broadcaster !next; !claim first-light demonstrates recovery.
1:40–2:05: Show the polished demo album and label it as the browser-local presentation layer. Show any production-only features as plans.
2:05–2:25: Show this Codex thread, file changes and tests; briefly describe its contribution.
2:25–2:35: No purchases, trading or cash value. End on the card collection.
No fake chat events in footage labelled live. If only one tester is available, use a disclosed test threshold configuration rather than inventing three viewers; this build currently hardcodes a demo threshold of three.
