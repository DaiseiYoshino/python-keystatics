import SingleKeyInfo from './singleKeyInfo.ts';
import SingleCharInfo from './singleCharInfo.ts';

class KeyRowInfo {
  public padding?: number;
  public keys: SingleKeyInfo[]

  constructor(params: {padding?: number, keys: SingleKeyInfo[]}) {
    this.padding = params.padding;
    this.keys = params.keys;
  }

  static fromSettingAndTypes(setting: {padding?: number, keys: {width?: number, keys: string[]}[]}, typeInfo: Record<string, number>) {
    return new KeyRowInfo({
      padding: setting.padding,
      keys: setting.keys.map(
        keySetting => SingleKeyInfo.fromSettingAndTypes(keySetting, typeInfo)
      )
    });
  }

  toElem(): string {
    const paddingElem: string = this.padding
      ? `<div class="key-pad" style="width: ${this.padding * 60}px;"></div>`
      : '';

    return `
      <div class="key-row">
        ${paddingElem}
        ${this.keys.map(key => key.toElem()).join('')}
      </div>
    `;
  }

  mapAffectToChar(func: (char: SingleCharInfo) => void): void {
    this.keys.map(key => key.mapAffectToChar(func));
  }
}

export default KeyRowInfo;
