import KeyRowInfo from './keyRowInfo.ts'
import SingleCharInfo from './SingleCharInfo.ts';

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

  toElem(): string {
    return this.rows.map(row => row.toElem()).join('');
  }

  merge(another: KeyBoardInfo): KeyBoardInfo {
    this.rows = [
      ...this.rows,
      ...another.rows
    ];
    return this;
  }

  mapAffectToChar(func: (char: SingleCharInfo) => void): void {
    this.rows.map(row => row.mapAffectToChar(func));
  }
}

export default KeyBoardInfo;
