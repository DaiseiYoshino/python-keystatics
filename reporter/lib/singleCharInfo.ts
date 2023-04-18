class SingleCharInfo {
  public name: string;
  public count: number;
  public color?: string;

  constructor(params: {name: string, count: number, color?: string}) {
    this.name = params.name;
    this.count = params.count;
    this.color = params.color;
  }

  static fromSettingAndTypes(setting: string, typeInfo: Record<string, number>):SingleCharInfo {
    const char = setting;
    return new SingleCharInfo({
      name: char,
      count: typeInfo[char] ?? 0
    });
  }

  setColor(color: string) {
    this.color = color;
    return this;
  }

  toElem(): string {
    return `
    <div
      class="key-box"
      onmouseover="mouseOverFunc(this)"
      onmouseout="mouseOutFunc(this)"
      style="background-color: ${this.color ?? '#000'}"
    >
      <span class="key-char">
        ${this.name}
      </span>
      <div class="balloon">
        <span>${this.name}: ${this.count}</span>
      </div>
    </div>
  `;
  }
}

export default SingleCharInfo;
