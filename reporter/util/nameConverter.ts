import KeyBoardInfo from '../lib/keyBoardInfo.ts';

const convertName = (keyName:string):string => {
  // 固有で設定したい判定
  const dict:Record<string, string> = {
    'Key.up': '↑',
    'Key.down': '↓',
    'Key.left': '←',
    'Key.right': '→',
    'Key.enter': '↵'
  }
  if (dict[keyName]) {
    return dict[keyName];
  }

  // ここからその他の判定
  // 「'」で囲われている箇所のマッチ
  const quotedExp = /'(.+)'/;
  if (keyName.match(quotedExp)) {
    return keyName.match(quotedExp)![1];
  }

  // Key. から始まるもののマッチ
  if (keyName.startsWith('Key.')) {
    const tmp:string = keyName.slice('Key.'.length);
    // ついでに名前を大文字始まりにする
    return tmp.replace(/^[a-z]/, char => char.toUpperCase());
  }

  return keyName;
}

export default (keyboard: KeyBoardInfo): KeyBoardInfo => {
  const ret: KeyBoardInfo = keyboard;

  for (const row of keyboard.rows) {
    for (const keycap of row.keys) {
      for (const char of keycap.chars) {
        char.name = convertName(char.name);
      }
    }
  }

  return ret;
}
