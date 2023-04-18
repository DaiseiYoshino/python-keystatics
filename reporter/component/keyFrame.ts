import {keyInfo} from '../types/types.ts'
import SingleCharInfo from '../lib/singleCharInfo.ts';

const keyBox = (char: SingleCharInfo): string => {
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
