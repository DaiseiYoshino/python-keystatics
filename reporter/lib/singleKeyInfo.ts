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
}

export default SingleKeyInfo;
