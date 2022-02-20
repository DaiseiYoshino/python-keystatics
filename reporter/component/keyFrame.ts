export default (keyInfo: {width:number, keys:string[]}): string => {
  return `
    <div class="key-frame" style="width:${keyInfo.width*60}px;">
      ${keyInfo.keys.map(key => `<div class="key-box" onmouseover="mouseOverFunc(this)" onmouseout="mouseOutFunc(this)"><span class="key-char">${key}</span></div>`).join('')}
    </div>
  `;
};
