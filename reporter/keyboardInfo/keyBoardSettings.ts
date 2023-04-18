export type keySetting = {
  width?: number,
  keys: string[]
}

export type rowSetting = {
  padding?: number,
  keys: keySetting[]
}

export type boardSetting = rowSetting[]

export class Manager {
  public info: boardSetting;

  constructor(info: boardSetting) {
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

