const keyBox = (key: string): string => {
  return `
    <div
      class="key-box"
      onmouseover="mouseOverFunc(this)"
      onmouseout="mouseOutFunc(this)"
    >
      <span class="key-char">
        ${key}
      </span>
    </div>
  `;
};

export default (keyInfo: {width?:number, keys:string[]}): string => {
  return `
    <div class="key-frame" style="width:${(keyInfo.width ?? 1)*60}px;">
      ${keyInfo.keys.map(keyBox).join('')}
    </div>
  `;
};
