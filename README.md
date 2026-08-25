# Design Skills for Claude Code

Don't reinvent the wheel. These skills bring the way you already explore, decide, and ship designs straight into Claude Code.

**Site:** served from [`docs/`](docs/) via GitHub Pages.

## Skills

| Skill | What it does | Status |
| --- | --- | --- |
| [/list-it](docs/skills/list-it/SKILL.md) | collect action items in a running list; build only when you explicitly ask to execute | available |
| [/explore](docs/skills/explore/SKILL.md) | a thinking-out-loud sandbox that runs parallel to your working list without mixing context; topics stay undecided by definition | available |
| [/mock-it](docs/skills/mock-it/SKILL.md) | explore multiple visual iterations in the same chat window without having to click a link to review a detailed artifact | available |
| /park-it | park explored decisions with context for later; summon the backlog when you're ready to tackle it | coming soon |
| /design-eval | audit a component, a page, or an entire flow against your design system; resolve inconsistencies, add new components, styles or variants | coming soon |

## Install a skill

Copy the skill from the site (the **Copy Skill** button hands you the full `SKILL.md`), or grab it here: save `docs/skills/<name>/SKILL.md` into `~/.claude/skills/<name>/SKILL.md` and invoke it as `/<name>` in Claude Code.

The site and the skill files live in the same repo, so every published skill update is immediately what the copy buttons serve.
