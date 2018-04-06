export default (text) => {
  const template = document.createElement('template');
  template.innerHTML = `<div>${text}</div>`;

  const notify = document.createElement('vaadin-notification');
  notify.position = 'bottom-end';
  notify.appendChild(template);
  notify.duration = 4000;

  document.body.appendChild(notify);
  notify.open();
  notify.addEventListener('opened-changed', () => {
    document.body.removeChild(notify);
  });
};
