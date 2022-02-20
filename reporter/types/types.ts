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
