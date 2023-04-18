import SingleKeyInfo from './singleKeyInfo.ts';

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
}

export default KeyRowInfo;
