import { keyRowInfo } from "../types/types";

const convertName = (keyName:string):string => {
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

export default (keyboard: keyRowInfo[]): keyRowInfo[] => {
  let ret: keyRowInfo[] = [];

  return ret;
}
