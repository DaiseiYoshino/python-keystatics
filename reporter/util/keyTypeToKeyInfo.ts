import {keyTypes, keyBoardSettings, keyRowInfo, keyInfo, singleChar} from '../types/types.ts';

/**
 * キーボード設定にあるキーを抽出する
 *
 * @param keyboard {keyBoardSettings}
 * @returns {string[]}
 */
const getCharsInKeyBoardSettings = (keyboard: keyBoardSettings): string[] => {
  let ret: string[] = [];
  for (const keyboardRow of keyboard) {
    for (const keycap of keyboardRow.keys) {
      ret = [...ret, ...keycap.keys];
    }
  }
  return ret;
};

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
const extractCharsNotInSetting = (keyboard: keyBoardSettings, keyType: keyTypes): string[] => {
  const charsInSettings = getCharsInKeyBoardSettings(keyboard);
  const charsInKeyType = getCharsInKeyTypes(keyType);
  return charsInKeyType.filter(
    char => ! charsInSettings.includes(char)
  );
}

/**
 * キーボード設定とキータイプ情報から、表示に使うデータを生成する
 *
 * @param keyboard {keyBoardSettings}
 * @param keyType {keyTypes}
 * @returns {keyRowInfo[]}
 */
const keyTypeToKeyInfo = (keyboard: keyBoardSettings, keyType: keyTypes): keyRowInfo[] => {
  const ret: keyRowInfo[] = [];

  // キーボード設定に含まれている文字についてデータを生成する
  for (const keyboardRow of keyboard) {// キーボードの列に対応するループ
    const keys: keyInfo[] = [];
    for (const keycap of keyboardRow.keys) {// 各キー(一つのキーには大文字小文字等複数の文字が含まれる)毎のループ
      const chars: singleChar[] = [];
      for (const char of keycap.keys) {// 各文字に対するループ
        chars.push({
          name: char,
          count: keyType[char] ?? 0
        });
      }
      keys.push({
        width: keycap.width ?? 1,
        chars: chars
      });
    }
    ret.push({
      padding: keyboardRow.padding ?? 0,
      keys: keys
    });
  }

  // キーボード設定に含まれていない文字についてデータを生成する
  const charsNotInKeyboardSettings = extractCharsNotInSetting(keyboard, keyType);
  const keysNumberOfLine = 10;
  // 各行に対するループ
  for (let lineNum = 0; lineNum < (charsNotInKeyboardSettings.length)/keysNumberOfLine; lineNum++) {
    const tmpKeyRow: keyRowInfo = {padding: 0, keys: []};
    // 各キー(1キー1文字)に対するループ
    for (let keyIndex = 0; keyIndex < keysNumberOfLine; keyIndex++) {
      const targetKeyName: string = charsNotInKeyboardSettings[lineNum * keysNumberOfLine + keyIndex];
      // もし追加する文字が尽きていれば早期離脱する
      if (typeof targetKeyName === 'undefined') {break;}

      const targetKeyType: number = keyType[targetKeyName];
      tmpKeyRow.keys.push({
        width: 1,
        chars: [{
          name: targetKeyName,
          count: targetKeyType ?? 0
        }]
      });
    }
    ret.push(tmpKeyRow);
  }

  return ret;
};

export default keyTypeToKeyInfo;
