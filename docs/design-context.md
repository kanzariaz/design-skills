# Design context — why things are the way they are

Living rationale for the site's design decisions. CLAUDE.md holds the rules;
this holds the why and the roads not taken. Last updated 2026-09-05.

## The signup section (footer)

Final form: a flat section in the skill-table grammar — hairline rails top and
bottom, content flush to the 800px band, page ground throughout. Title "New
skills / drop in your inbox –" set exactly like a skill name (25/600, sentence
case, trailing en dash): the signup deliberately reads as *one more entry in
the list*, not a special object. The capsule (input + docked Subscribe pill,
420px) is the section's one drawn thing: dark-olive outline, the #eef2da fill
shared with the Notify buttons and coming-soon chips (that shared fill = the
"signup system" surface), brightening to white on focus. Input text is Inter —
an email address is data, and sans is the site's control voice.

Rejected on the way here, in order: ink full-bleed footer and contained ink
panel (too loud for a restraint-driven page); olive mid-tone panel; darker sage
wash panel (shipped briefly, pulled — "carved zone" competed with the page's
open-hairline language, twice); rounded outlined card (525→full-width, then
dropped entirely); heading at 800/30 with its own token (retired — one fewer
size decision); the S1 "single sentence, no subtext" reduction (tried live,
reverted same hour — kept only its sentence-case title styling).

Type-size eval (2026-09-05) found the form speaking five sizes; the fix that
stuck: `--text-body` corrected from a stale 17px to the de facto 18px, every
serif in the section routed through it. The card's vocabulary is now exactly
serif 25 / serif 18 / Inter 14(–16 input).

## Email capture strategy

One Kit list, never per-skill segments: segmenting an audience that doesn't
exist yet fragments it, creates promise-traps ("only email me about /park-it"),
and adds send-time work. Per-skill *intent* still gets captured — every Notify
Me click records its skill as the subscription's `source` field, which is free
prioritization data ("which coming-soon skill pulls hardest"). The Notify
buttons exist because "Coming Soon" was a status pretending to be a button;
now the status lives in the chip and the button does something real.

Kit (kit.com) was chosen after beehiiv (no client-side form posts without a
key-holding proxy) and over Substack (user explicitly declined), MailerLite,
Buttondown (100-sub free cap too small): Kit's form endpoint accepts direct
browser POSTs, free to 10k subscribers.

## The coming-soon chip saga (settled)

The chip went through: solid tint pill beside the name → stacked under/over
the name (broke row centering) → left-gutter annotation with dotted pointer
(loved conceptually, but overhung the page's left edge — "unbalanced" — and
needed a separate mobile placement) → **final: embedded in the divider above
its row**, a label-on-rule. Ground fill masks the line ("no fill" look),
hairline stroke, one placement at every width, and the old two-placement CSS
died. Both neighbor rows yield +4px to the chip (the user's insight: the chip
sits on a *boundary*, so compensation must be symmetric — a one-sided padding
fix left the row above cramped). A drop-tick connector was mocked and declined:
position alone does the pointing.

Dashes moved during this: dashed/dotted texture belongs to *status* (chip),
solid strokes to *working actions* (Notify button) — "a button that works
shouldn't look broken."

## Arrival cue (settled by subtraction)

Tried: double border pulse (too blinky) → ink darken-and-decay (too clicky) →
card "breath" fill animation at 1.6s and 3s (user: remove entirely). Locked
outcome: **no box animations**. The Notify click scrolls, focuses the field,
and the capsule's own focus light-up (fill → white) is the entire arrival
signal. Light = live is the one interaction metaphor.

## Favicon

Slash on a sage tile (option D) — the slash is the brand's real mark (skill
names, toast, copy command all lead with it) and survives 16px where a "DS"
monogram mushes. Sage tile chosen over ink despite ink's dark-theme advantage.
The slash is a drawn angled bar at Fraunces' slash angle, not the glyph —
favicons can't load webfonts; trace the real outline if it ever matters.

## Copy voice

Sentence case leanings, en dashes only (user rule, swept 2026-09-05), serif
for content / Inter for controls and labels. Socials sit under "Other musings
on AI, Design and Tech land here –" as bare 18px icons — GitHub removed from
socials (repo link ≠ musings channel); a © line was tried with the Norma-style
footer and cut. Handles were dropped from socials when they became icon tiles,
and the tiles themselves were dropped for bare marks when the signup became
the footer's one object.
