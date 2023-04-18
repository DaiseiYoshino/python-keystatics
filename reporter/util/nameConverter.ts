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

export default convertName;