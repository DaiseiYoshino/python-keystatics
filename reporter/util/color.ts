/**
 * キーに着色する用のパラメータを生成する
 *
 * @param count 単キーのタイプ数
 * @param maxCount キータイプ最大のキーのタイプ数
 * @returns {string} 設定する色
 */
const getColorForKey = (count: number, maxCount: number): string => {
  const barometer: number = count / maxCount;

  const red: number = Math.floor(255 * barometer * barometer);
  const green: number = 128;
  const blue: number = Math.floor(255 * barometer);
  return `rgb(${red}, ${green}, ${blue})`;
}

export default getColorForKey;
