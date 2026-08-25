---
name: mock-it
description: Mock up a few design options INSIDE the chat (inline visuals, not artifacts) when the user says "mock up X", "show me some options for X", or invokes /mock-it. Renders 2–4 labeled variants of a screen/component in the project's real design tokens, then asks which direction to pursue.
---

# Mockup — quick visual options, in the chat

The user explores design directions by looking, not reading. When they ask for a
mockup, produce a small set of visual options inline in the conversation — NOT as a
published artifact (artifacts are for full decision documents; this skill is for
fast looks).

## How

1. 2–4 variants, each labeled (Option A/B/C + a two-word name) with a one-line
   trade-off under each.
2. Render them with the inline visualization tool so they appear in the chat.
   Frame the mock at the target's real proportions — a phone frame at device
   proportions for mobile apps, a browser-shaped panel for web.
3. Draw in the project's REAL design tokens — discover them fresh if unsure
   (theme files, DesignSystem/tokens modules, tailwind config, asset catalogs,
   CSS custom properties). Mock in the product's default appearance (dark mode
   if the product defaults to dark) unless asked otherwise, and verify color
   values against the source when fidelity matters.
4. Real copy, never lorem; honor the project's locked product decisions and
   vocabulary (check CLAUDE.md / context docs before inventing labels).
5. End by asking which option (or which pieces of several) to take forward. A
   mockup round is EXPLORATION — nothing goes on the /list-it list and nothing gets
   built from it until the user picks a direction.
6. Only escalate to an artifact if the user asks for one (e.g. wants to share it or
   keep it as a decision record).
