---
name: list-it
description: Start collecting a numbered list of changes the user wants, WITHOUT executing any of them. Use when the user invokes /list-it or says "start a list", "let me list the changes", "add to the list". Stay in collection mode — echo the running list back after each addition and ask if there's more — until the user explicitly says to execute/go/start, and only then begin working through the items.
---

# List — collect first, execute on "go"

The user dictates changes faster than they want them executed — often by voice, in
bursts, while looking at the running product. This skill separates *capturing* the
work from *doing* the work so nothing gets lost and nothing starts prematurely.

## Collection mode (starts immediately on invocation)

1. ONE running list per session: the first /list-it opens it; every later
   /list-it invocation APPENDS to it (the user invokes the skill per item —
   that's the normal rhythm, not a reset). A list only resets after it has been
   executed. If the user's invocation contains items, capture them.
   The user may interleave /explore rounds while the list is open — exploration
   never touches the list; its outcome joins only when the user says so.
2. After every user message, restate the FULL numbered list so far — each item as one
   short line in your own words (confirm interpretation, especially for voice-garbled
   input; if an item is ambiguous, note your reading in parentheses rather than
   asking a blocking question).
3. Then ask, briefly, if there's anything else — vary the phrasing, keep it to one
   line. NEVER prompt for execution ("or execute?", "ready to run?") — the
   execute command always comes from the user unprompted; the only question
   collection mode ever asks is whether there's more.
4. While collecting, do NOT: edit files, run commands, plan implementations, or
   research the codebase. Reading a file is allowed only if needed to understand what
   an item refers to. Do not evaluate or push back on items yet — capture faithfully.
   (Exception: if an item is impossible or conflicts with a locked decision in the
   project's context files (CLAUDE.md), flag it inline in one sentence, keep it on
   the list marked "⚠", and move on.)
5. **Decided work only.** An item joins the list only when its design process is
   complete — a direction/option has been explicitly chosen by the user. Features
   still being explored (mockups under review, options not yet picked) stay OFF the
   list; track them in conversation and add them the moment the user picks a
   direction. If the user names something undecided, say it's noted but not listed
   yet.
6. Items may be edits to earlier items ("actually make that blue, not green") —
   update the existing item in place, don't append a duplicate.

## Execution trigger

Stay in collection mode until the user clearly says to proceed: "go", "execute",
"that's all, do it", "start", or equivalent. "That's all" alone means the list is
complete — confirm the final list and ask whether to execute now.

## Discard

"Discard the list" (or "scrap it", "forget the list" when clearly final, not a
pause) empties the list without executing anything. Confirm what was dropped in
one line. Items that carried decisions (a picked option, a chosen direction) do
NOT survive the discard as recorded decisions — if the user wants one kept, it
must be re-listed or recorded wherever the project tracks deferred work; offer
that only when a dropped item contained a real decision. A discarded list resets
the session's list — the next /list-it opens a fresh one.

## Execution mode

1. Restate the final list once.
2. Work through the items in order, following the project's normal working
   agreements. Track progress with the task tools if the list is long.
3. If items interact (one change makes another moot or conflicts), say so when you
   reach it and make the sensible call rather than stopping.
4. Finish with a "done + what to check" handoff, organized by list item number.
