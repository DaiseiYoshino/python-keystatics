import SingleCharInfo from '../lib/singleCharInfo.ts'

export type keyInfo = {
  width?: number,
  chars: SingleCharInfo[]
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
