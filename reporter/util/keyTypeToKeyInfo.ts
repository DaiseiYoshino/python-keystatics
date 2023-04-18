import {keyTypes, keyRowInfo} from '../types/types.ts';
import {Manager as KeyBoardSettingsManager} from '../keyboardInfo/keyBoardSettings.ts'
import KeyRowInfo from '../lib/keyRowInfo.ts';
import getColorForKey from './color.ts';

/**
 * 最大キータイプ数を取得する
 *
 * @param keyType キータイプ情報
 * @returns {number}
 */
const getMaxKeyTypes = (keyType: keyTypes): number => {
  const counts: number[] = Object.values(keyType); 
  return Math.max(...counts);
}

/**
 * キータイプ情報にあるキーを抽出する
 *
 * @param keyType {keyTypes}
 * @returns {string[]}
 */
const getCharsInKeyTypes = (keyType: keyTypes): string[] => {
  return Object.keys(keyType);
}

/**
 * キーボード設定になく、キータイプ情報にあるキーを抽出する
 *
 * @param keyboard {keyBoardSettings}
 * @param keyType {keyTypes}
 * @returns {string[]}
 */
const extractCharsNotInSetting = (KeyBoardSettingsManager: KeyBoardSettingsManager, keyType: keyTypes): string[] => {
  const charsInSettings = KeyBoardSettingsManager.charInSetting();
  const charsInKeyType = getCharsInKeyTypes(keyType);
  return charsInKeyType.filter(
    char => ! charsInSettings.includes(char)
  );
}

/**
 * キーボード設定とキータイプ情報から、表示に使うデータを生成する
 */
const keyTypeToKeyInfo = (kbsManager: KeyBoardSettingsManager, keyType: keyTypes): keyRowInfo[] => {
  const keyboard = kbsManager.info;
  const maxTypes = getMaxKeyTypes(keyType);
  const ret: keyRowInfo[] = [];

  // キーボード設定に含まれている文字についてデータを生成する
  for (const keyboardRow of keyboard) {// キーボードの列に対応するループ
    const keyRow = KeyRowInfo.fromSettingAndTypes(keyboardRow, keyType);
    ret.push(keyRow);
  }

  // キーボード設定に含まれていない文字についてデータを生成する
  const charsNotInKeyboardSettings = extractCharsNotInSetting(kbsManager, keyType);
  const keysNumberOfLine = 10;
  const rowSettingChunks = [];
  for (let lineNum = 0; lineNum < (charsNotInKeyboardSettings.length)/keysNumberOfLine; lineNum++) {
    const rowSetting: {padding?: number, keys: {width?: number, keys:string[]}[]} = {padding: 0, keys: []}
    for (let keyIndex = 0; keyIndex < keysNumberOfLine; keyIndex++) {
      const keySetting: {width?: number, keys:string[]} = {
        width: 1,
        keys: [charsNotInKeyboardSettings[lineNum * keysNumberOfLine + keyIndex]]
      }
      rowSetting.keys.push(keySetting);
    }
    rowSettingChunks.push(rowSetting);
  }
  // 各行に対するループ
  for (let lineNum = 0; lineNum < (charsNotInKeyboardSettings.length)/keysNumberOfLine; lineNum++) {
    const row = KeyRowInfo.fromSettingAndTypes(rowSettingChunks[lineNum], keyType);
    ret.push(row);
  }

  return ret;
};

export default keyTypeToKeyInfo;
