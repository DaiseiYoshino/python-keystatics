export type key = {
  width?: number,
  keys: string[]
}

export type row = {
  padding?: number,
  keys: key[]
}

export type board = row[]

export class Manager {
  public info: board;

  constructor(info: board) {
    this.info = info;
  }

  charInSetting(): string[] {
    const ret: string[] = []
    for (const row of this.info) {
      for (const key of row.keys) {
        ret.concat(key.keys)
      }
    }
    return ret;
  }
}
