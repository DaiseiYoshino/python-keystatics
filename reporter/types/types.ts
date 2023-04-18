export type keyTypes = Record<string, number>;

export type keyBoardSettings = {
  padding?: number,
  keys: {width?: number, keys: string[]}[]
}[];
