import SingleKeyInfo from '../lib/singleKeyInfo.ts'

export default (key: SingleKeyInfo): string => {
  return `
    <div class="key-frame" style="width:${(key.width ?? 1)*60}px;">
      ${key.chars.map(char => char.toElem()).join('')}
    </div>
  `;
};
