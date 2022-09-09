import {keyInfo, singleChar} from '../types/types.ts'

const keyBox = (char: singleChar): string => {
  return `
    <div
      class="key-box"
      onmouseover="mouseOverFunc(this)"
      onmouseout="mouseOutFunc(this)"
      style="background-color: ${char.color}"
    >
      <span class="key-char">
        ${char.name}
      </span>
      <div class="balloon">
        <span>${char.name}: ${char.count}</span>
      </div>
    </div>
  `;
};

export default (key: keyInfo): string => {
  return `
    <div class="key-frame" style="width:${(key.width ?? 1)*60}px;">
      ${key.chars.map(keyBox).join('')}
    </div>
  `;
};
