export default (keys: string[]): string => {
  return `
    <div class="key-frame">
      ${keys.map(key => `<div class="key-box"><span class="key-char">${key}</span></div>`).join('')}
    </div>
  `;
};
