import SingleCharInfo from './singleCharInfo.ts';

class SingleKeyInfo {
  public width?: number;
  public chars: SingleCharInfo[];

  constructor(params: {width?: number, chars: SingleCharInfo[]}) {
    this.width = params.width;
    this.chars = params.chars;
  }
}

export default SingleKeyInfo;
