# Parked

The durable backlog for this project: open decisions and deferred work. Items leave by resolution (edited to a one-line outcome), never silent deletion.

### npx copy-button + toast — parked 2026-08-25

Switch the site's Copy Skill buttons from copying raw SKILL.md to copying the one-line installer (`npx skills add kanzariaz/design-skills -s <skill>`), with a toast confirming "/skill install command copied — paste it into Claude Code or your terminal."

- Verified 2026-08-25: the CLI works against this repo today with zero changes — it discovers `docs/skills/`, and `-s <name>` installs a single skill correctly. skills.sh needs no account/setup and will show public install counts once people use the command.
- Three toast mockups were reviewed in-chat: A (ink pill, bottom-right), B (lime card bottom-left that also shows the command), C (full-width ink bottom bar). Claude's lean: A for elegance, or A's placement with B's command preview for transparency.
- Deferred at the pick-a-toast stage; no direction chosen yet. Current buttons still copy raw SKILL.md.
