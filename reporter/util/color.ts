const CHAR_MAX: number = 255;

/**
 * キーに着色する用のパラメータを生成する
 *
 * @param count 単キーのタイプ数
 * @param maxCount キータイプ最大のキーのタイプ数
 * @returns {string} 設定する色
 */
const getColorForKey = (count: number, maxCount: number): string => {
  const barometer: number = Math.min(CHAR_MAX, count);

  const red: number = barometer;
  const green: number = 0;
  const blue: number = 255 - barometer;
  return `rgb(${red}, ${green}, ${blue})`;
}

export default getColorForKey;
