// Renders the skill sections from skills.json and wires the copy buttons.
// A "copy" skill's button copies its one-line installer; the hero toast is
// the only click feedback (the button label never changes).

const REPO = 'kanzariaz/design-skills';

const COPY_ICON = '<svg class="btn__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.4"></rect><path d="M10.5 3.5V3a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 3v5A1.5 1.5 0 0 0 4 9.5h1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg>';

let toastTimer = null;

function showToast(title, text) {
  const toast = document.getElementById('toast');
  toast.querySelector('.toast__title').textContent = title;
  toast.querySelector('.toast__text').textContent = text;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 4000);
}

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
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(`npx skills add ${REPO} -s ${skill.id}`);
        showToast(`${skill.name} copied`, 'paste into Claude Code or your terminal');
        window.tdSignal?.('copySkill', { skill: skill.id });
      } catch {
        showToast('Copy failed', 'try again');
      }
    });
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
}

init();
