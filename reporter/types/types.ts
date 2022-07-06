export type singleChar = {
  name: string,
  count: number
};

export type keyInfo = {
  width?: number,
  chars: singleChar[]
};

export type keyRowInfo = {
  padding?: number
  keys: keyInfo[]
};

export type keyTypes = Record<string, number>;

export type keyBoardSettings = {
  padding?: number,
  keys: {width?: number, keys: string[]}[]
}[];
