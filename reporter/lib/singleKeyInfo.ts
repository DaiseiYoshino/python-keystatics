import SingleCharInfo from './singleCharInfo.ts';

class SingleKeyInfo {
  public width?: number;
  public chars: SingleCharInfo[];

  constructor(params: {width?: number, chars: SingleCharInfo[]}) {
    this.width = params.width;
    this.chars = params.chars;
  }

  static fromSettingAndTypes(setting: {width?:number, keys: string[]}, typeInfo: Record<string, number>) {
    return new SingleKeyInfo({
      width: setting.width,
      chars: setting.keys.map(
        charName => SingleCharInfo.fromSettingAndTypes(charName, typeInfo)
      )
    });
  }

  toElem(): string {
    return `
    <div class="key-frame" style="width:${(this.width ?? 1)*60}px;">
      ${this.chars.map(char => char.toElem()).join('')}
    </div>
    `;
  }
}

export default SingleKeyInfo;
