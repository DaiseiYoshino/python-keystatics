import SingleKeyInfo from '../lib/singleKeyInfo.ts';

export type keyRowInfo = {
  padding?: number
  keys: SingleKeyInfo[]
};

export type keyTypes = Record<string, number>;

export type keyBoardSettings = {
  padding?: number,
  keys: {width?: number, keys: string[]}[]
}[];
