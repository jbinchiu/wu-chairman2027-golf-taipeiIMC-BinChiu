const search = document.getElementById('search-player');
const picker = document.getElementById('pick-player');
const result = document.getElementById('result');
const demo = document.getElementById('demo');
const status = document.getElementById('status');
const selectionKey = 'wu-golf-selected-player';

function recall(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function remember(key, value) {
  try { localStorage.setItem(key, value); } catch {}
}

function fillPicker(selected = '') {
  const query = search.value.trim().replace(/\s/g, '');
  const options = roster.flatMap((player, index) => {
    const label = `${player.name}｜${player.club}｜${player.group} ${player.number} 號`;
    return label.replace(/\s/g, '').includes(query) ? [new Option(label, index)] : [];
  });
  picker.replaceChildren(new Option(options.length ? '請選擇球友' : '查無符合的球友', ''), ...options);
  picker.value = selected;
  picker.disabled = !options.length;
}

function checkinKey() {
  return 'wu-golf-demo-checkin:' + picker.value;
}

function render() {
  const player = roster[picker.value];
  const checkedIn = player && recall(checkinKey());
  result.hidden = !player;
  demo.disabled = !player || Boolean(checkedIn);
  status.textContent = checkedIn ? '已完成此球友的示範報到。' : '目前尚未開放正式報到。';
  result.replaceChildren();
  if (!player) return;

  const heading = document.createElement('strong');
  heading.textContent = `${player.name}｜${player.group} · ${player.number} 號`;
  const teammates = document.createElement('ol');
  roster.filter(member => member.group === player.group)
    .sort((a, b) => a.number - b.number)
    .forEach(member => {
      const item = document.createElement('li');
      item.value = member.number;
      item.textContent = `${member.name}（${member.club}）${member === player ? ' · 我' : ''}`;
      teammates.append(item);
    });
  result.append(heading, teammates);
}

search.addEventListener('input', () => {
  fillPicker();
  render();
});
picker.addEventListener('change', () => {
  remember(selectionKey, picker.value);
  render();
});
demo.addEventListener('click', () => {
  if (demo.disabled) return;
  remember(checkinKey(), new Date().toISOString());
  render();
});

fillPicker(recall(selectionKey) ?? '');
render();
