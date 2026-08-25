// Renders the skill sections from skills.json and wires the copy buttons.
// A "copy" skill's button copies the full contents of skills/<id>/SKILL.md
// (prefetched on load so the copy happens inside the click gesture).

const COPY_ICON = '<svg class="btn__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.4"></rect><path d="M10.5 3.5V3a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 3v5A1.5 1.5 0 0 0 4 9.5h1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg>';

const skillTexts = new Map();

function renderRow(skill) {
  const row = document.createElement('article');
  row.className = 'skill-row';

  const name = document.createElement('h3');
  name.className = 'skill-row__name';
  name.textContent = skill.name;

  const desc = document.createElement('p');
  desc.className = 'skill-row__desc';
  desc.textContent = skill.description;

  const action = document.createElement('div');
  action.className = 'skill-row__action';

  if (skill.status === 'copy') {
    const btn = document.createElement('button');
    btn.className = 'btn btn--copy';
    btn.type = 'button';
    btn.innerHTML = COPY_ICON + '<span class="btn__label">Copy Skill</span>';
    wireCopy(btn, skill.id);
    action.appendChild(btn);
  } else {
    const soon = document.createElement('span');
    soon.className = 'btn btn--soon';
    soon.textContent = 'Coming Soon';
    action.appendChild(soon);
  }

  row.append(name, desc, action);
  return row;
}

function wireCopy(btn, id) {
  const label = () => btn.querySelector('.btn__label');
  const original = 'Copy Skill';
  let timer = null;
  const flash = (text) => {
    label().textContent = text;
    clearTimeout(timer);
    timer = setTimeout(() => {
      label().textContent = original;
      btn.classList.remove('is-copied');
    }, 1600);
  };

  btn.addEventListener('click', async () => {
    const text = skillTexts.get(id);
    if (!text) { flash('Not ready yet'); return; }
    try {
      await navigator.clipboard.writeText(text);
      btn.classList.add('is-copied');
      flash('Copied!');
    } catch {
      flash('Copy failed');
    }
  });
}

async function init() {
  const res = await fetch('skills.json');
  const data = await res.json();
  const mount = document.getElementById('sections');

  for (const section of data.sections) {
    const el = document.createElement('section');
    el.className = 'skills';

    const label = document.createElement('h2');
    label.className = 'skills__label';
    label.textContent = section.label;

    const table = document.createElement('div');
    table.className = 'skills__table';
    for (const skill of section.skills) table.appendChild(renderRow(skill));

    el.append(label, table);
    mount.appendChild(el);
  }

  const copyable = data.sections.flatMap((s) => s.skills).filter((s) => s.status === 'copy');
  await Promise.all(copyable.map(async (s) => {
    try {
      const r = await fetch(`skills/${s.id}/SKILL.md`);
      if (r.ok) skillTexts.set(s.id, await r.text());
    } catch { /* button shows "Not ready yet" if this failed */ }
  }));
}

init();
