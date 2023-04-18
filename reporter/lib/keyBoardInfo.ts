import KeyRowInfo from './keyRowInfo.ts'

class KeyBoardInfo {
  public rows: KeyRowInfo[];

  constructor(rows: KeyRowInfo[]) {
    this.rows = rows;
  }

  static fromSettingAndTypes(setting: any[], typeInfo: Record<string, number>) {
    return new KeyBoardInfo(
      setting.map(rowSetting => KeyRowInfo.fromSettingAndTypes(rowSetting, typeInfo))
    );
  }

  merge(another: KeyBoardInfo): KeyBoardInfo {
    this.rows = [
      ...this.rows,
      ...another.rows
    ];
    return this;
  }
}

export default KeyBoardInfo;
