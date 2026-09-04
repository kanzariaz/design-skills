---
name: save-rationale
description: Distill the current chat's durable product/design decisions and working instructions into the repo's context files (CLAUDE.md + a docs context file) so the next session starts pre-loaded. Use when the user says "save rationale", "save design context", "capture this chat", "remember this for the next chat", or mentions running out of context.
---

# Save rationale

Long working sessions produce decisions that die with the conversation. This
skill distills them into the repo's persistent context files.

## Where things go

- **CLAUDE.md** — the compressed operating rules: locked decisions, working
  agreements, hard-won laws, current state, open items. Terse; every line
  earns its place. Create it if the repo lacks one (short: what the project
  is, then the sections above).
- **A deeper context doc** (`docs/design-context.md` or the repo's existing
  equivalent) — the rationale behind the rules: why decisions were made,
  debugging lore, rejected alternatives.

## How

1. Sweep the conversation for: decisions explicitly made (with their why),
   corrections the user gave, new constraints discovered, state changes
   (shipped/built/verified), and anything the user flagged as "remember this."
2. UPDATE rather than append: fold new facts into existing sections, delete
   superseded lines, convert relative dates to absolute. The files must read
   as current truth, not a changelog.
3. Don't record what the code/git history already shows — record what a fresh
   session couldn't derive.
4. Show a one-paragraph summary of what was saved where.
