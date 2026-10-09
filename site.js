import {download} from './config.js';

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectTab(tabs[next]);
    tabs[next].focus();
  });
});

const dialog = document.querySelector('.lightbox');
document.querySelectorAll('.shot').forEach(button => button.addEventListener('click', () => {
  const source = button.querySelector('img');
  if (typeof dialog.showModal !== 'function') {
    window.open(source.src, '_blank', 'noopener');
    return;
  }
  const image = dialog.querySelector('img');
  image.src = source.src;
  image.alt = source.alt;
  dialog.showModal();
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

if (download.url && /^https:\/\//.test(download.url)) {
  const link = document.createElement('a');
  link.className = 'button gold';
  link.href = download.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = '前往 TapTap ↗';
  const slot = document.querySelector('[data-download]');
  slot.replaceChildren(link);
  document.querySelector('[data-download-note]').textContent = '前往 TapTap 查看游戏详情与可用版本。';
  document.querySelector('[data-get]').textContent = '前往 TapTap ↗';
  document.querySelector('[data-get]').href = download.url;
  document.querySelector('[data-get]').target = '_blank';
  document.querySelector('[data-get]').rel = 'noopener noreferrer';
  if (download.qr) {
    const image = document.createElement('img');
    image.src = download.qr;
    image.alt = '玉石经营模拟器 TapTap 二维码';
    image.className = 'download-qr';
    slot.append(image);
  }
}
