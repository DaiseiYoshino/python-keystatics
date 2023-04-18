import {keyInfo} from '../types/types.ts'

export default (key: keyInfo): string => {
  return `
    <div class="key-frame" style="width:${(key.width ?? 1)*60}px;">
      ${key.chars.map(char => char.toElem()).join('')}
    </div>
  `;
};
