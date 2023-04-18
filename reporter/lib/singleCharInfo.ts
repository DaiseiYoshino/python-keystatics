class SingleCharInfo {
  public name: string;
  public count: number;
  public color?: string;

  constructor(params: {name: string, count: number, color?: string}) {
    this.name = params.name;
    this.count = params.count;
    this.color = params.color;
  }
}

export default SingleCharInfo;
