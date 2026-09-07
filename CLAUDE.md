# Design Skills for Claude Code — site

Landing site for Kanza's design skills, live at https://kanzariaz.github.io/design-skills/
(GitHub Pages from `main`/docs). `docs/` is the deliverable; rows render client-side
from `docs/skills.json`; Copy buttons copy `npx skills add kanzariaz/design-skills -s <id>`
and prefetch `docs/skills/<id>/SKILL.md`. Keep `docs/.nojekyll`.

## Working agreements

- Funnel: dictate → edit → verify on localhost preview (launch.json `design-skills-site`,
  port 4173) → push on the user's word. Big/risky rounds go on a test branch first.
- The user drives with /list-it (append per item, execute on word), /explore, /mock-it.
  Mock before building; when the user says "mock", do NOT touch files.
- User is learning git — explain terminal steps plainly, one at a time. Their GitHub
  PAT is in the macOS keychain (set up 2026-09-05), so Claude can push. No brew, no gh.
- En dashes (–) everywhere in site copy; em dashes are banned.
- All type routes through the tokens in styles.css `:root`. Ladder: names + form title
  `--text-skill-name` (600, 21–25); page title `--text-title` (700, 30–44); body
  `--text-body` (400 18 — do NOT let consumers override sizes); section labels Inter
  600/18; buttons `--text-button` (Inter 600/14); errors `--text-caption` (Inter 600/14).
- Hero subtitle is italic; everything else upright (signup subtext deliberately upright).

## Email signup (live, wired)

- Posts directly to Kit form `9881799` (`app.kit.com/forms/9881799/subscriptions`),
  FormData `email_address` + `fields[source]`. No proxy, no keys. Double opt-in is ON
  → success copy says "check your email to confirm"; soften if the user disables it.
- ONE list, no per-skill segments (locked decision). Per-skill intent is captured only
  as the `source` field (skill id or "direct") — needs a custom field `source` created
  in Kit to persist; unconfirmed whether the user made it.
- Subscribe disables on success; any edit to the field re-arms the form.
- Junk test subscribers `test@example.com` / `livetest@example.com` may still need
  deleting in Kit.

## Coming-soon / notify system

- Chip sits ON the divider above its row (ground fill masks the line, hairline stroke,
  7px radius, olive text); both neighbor rows yield +4px on the chip-facing side
  (`.skill-row--soon` + `:has(+ .skill-row--soon)`). One placement at every width.
- Button is "Notify Me" (bell, outlined 1.4 stroke, solid olive border, #eef2da fill):
  scrolls to the signup, focuses the field (the focus light-up IS the arrival cue —
  no box animations, that's a locked veto), records the source skill.
- When a skill ships: flip its skills.json `status` to "copy" — everything else follows.

## Analytics (TelemetryDeck, live)

pageview · copySkill{skill} · notifyClick{skill} · signupSuccess{source} ·
signupError{kind: invalid|network} · socialClick{platform}. APP_ID is set in
docs/analytics.js.

## Open items

- Kit custom field `source` (user-side, 1 min) for source data to persist.
- Kit double opt-in: decide keep/disable; adjust success copy if disabled.
- Favicon slash is a drawn bar, not the true Fraunces glyph — trace the glyph if wanted.

Rationale and rejected directions: docs/design-context.md.
