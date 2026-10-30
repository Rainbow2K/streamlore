# StreamLore
**Good streams end. The moments stay.**

[Interactive preview](https://streamlore-nova.szemraj.chatgpt.site) (owner-private) · [Source](https://github.com/Rainbow2K/streamlore)

### Try the demo
Open the preview, click **Add a demo voice** three times, reveal the card and keep it. These clicks simulate three distinct viewers. Visit **Your collection** to see the saved card. No Twitch account is needed for this simulator. Real chat requires the local bridge below. An independent interactive prototype for Twitch communities. Original NOVA character, six animated collectible moments, a deterministic community unlock and an account-bound local claim ledger.

## What works now
- Hosted/static demo: simulated distinct chat participants, unlock, animated reveal, local browser album, previous-chapter recovery, responsive layout and reduced-motion support.
- Local Node bridge: Twitch OAuth implicit public-client flow with state validation, token validation, EventSub WebSocket chat listener, reconnects, unique-message deduplication, broadcaster-only chapter advance and persistent account-bound claim ledger.
- OBS Browser Source overlay at http://localhost:8787/overlay.html.

**Not yet verified:** end-to-end Twitch login, permissions and real chat, because no Twitch developer app/account is configured. Do not describe the hosted simulator as a live integration. No real stream clips, watch-time verification, multi-user cloud albums, trading or payments. The local dashboard shows the connected broadcaster’s collection; viewers claim via chat, with no authenticated personal album UI yet.

## Run (Node.js 22+, no npm dependencies)
```
npm test
npm start
```
Open **http://localhost:8787** (use localhost, not 127.0.0.1 for OAuth).
Without configuration this serves demo mode. To connect:
1. Enable Twitch account 2FA and verify email.
2. Register a **Public** client in https://dev.twitch.tv/console/apps with OAuth Redirect URL exactly `http://localhost:8787/auth/callback`.
3. Set the public Client ID, then start:
   - macOS/Linux: `TWITCH_CLIENT_ID=YOUR_PUBLIC_CLIENT_ID npm start`
   - Windows PowerShell: `$env:TWITCH_CLIENT_ID="YOUR_PUBLIC_CLIENT_ID"; npm start`
4. Open localhost, click Connect Twitch then Continue with Twitch. Authorize **user:read:chat**. No client secret required; no token in chat, logs, files or localStorage. Token only resides in bridge memory.
5. On that account’s channel, three distinct accounts send `!moment`. Repeated messages from one user do not advance the threshold. After unlock send `!claim`; broadcaster sends `!next`. For old unlocked cards use `!claim first-light` or a card ID such as `!claim home-again`.
6. Add http://localhost:8787/overlay.html as an OBS Browser Source, 1920×1080. Transmit your original art or authorized content; record the actual chat-to-overlay interaction.
7. Disconnect at the end; this attempts token revocation. Tokens also clear on server restart. Reauthorize after token expiration; there is no refresh-token flow in this public-client prototype.

## Data and security
Bridge listens only on 127.0.0.1; do not expose it to the internet. It checks Host and POST Origin, uses OAuth state with expiry and memory-only tokens. `.data/state.json` contains Twitch IDs and card claims; keep it private, delete it to erase all collections, or use same-origin POST `/api/erase` with `X-StreamLore: 1`. Ordinary chat is not retained. Recognized commands appear temporarily on the local dashboard. No analytics or tracking SDK. Google Fonts is optional; system fallback works offline. Production needs authorization on every viewer album, retention/erasure controls, more robust storage and reconnect/error tests.

## Testing and submission
`npm test` checks distinct voices, idempotent claims, locked-card rejection and past-chapter recovery. Syntax checks pass. Browser QA verified demo unlock and album save. Twitch integration remains untested against a real account.
See [concept](docs/CONCEPT.md), [submission draft](docs/SUBMISSION.md), [test checklist](docs/TESTING.md).

All original code and SVG artwork created in this Codex thread. No claim of Twitch endorsement. No purchased chances, Bits, subs, Channel Points, NFT, cash value or transfer functionality. Name/brand availability has not been cleared.
