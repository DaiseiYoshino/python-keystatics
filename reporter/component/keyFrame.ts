import {keyInfo, singleChar} from '../types/types'

const keyBox = (char: singleChar): string => {
  return `
    <div
      class="key-box"
      onmouseover="mouseOverFunc(this)"
      onmouseout="mouseOutFunc(this)"
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
