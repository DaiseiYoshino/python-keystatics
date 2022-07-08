import {keyTypes, keyBoardSettings, keyRowInfo, keyInfo, singleChar} from '../types/types.ts';

const keyTypeToKeyInfo = (keyboard: keyBoardSettings, keyType: keyTypes): keyRowInfo[] => {
  let ret: keyRowInfo[] = [];
  for (const keyboardRow of keyboard) {// キーボードの列に対応するループ
    const padding: number = keyboardRow.padding ?? 0;
    const keys: keyInfo[] = [];
    for (const keycap of keyboardRow.keys) {// 各キー(一つのキーには大文字小文字等複数の文字が含まれる)毎のループ
      let width: number = keycap.width ?? 1;
      let chars: singleChar[] = [];
      for (const char of keycap.keys) {// 各文字に対するループ
        chars.push({
          name: char,
          count: keyType[char] ?? 0
        });
      }
      keys.push({
        width: width,
        chars: chars
      });
    }
    ret.push({
      padding: padding,
      keys: keys
    });
  }
  return ret;
};

export default keyTypeToKeyInfo;
