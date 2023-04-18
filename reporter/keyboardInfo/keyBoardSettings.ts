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
}

