// TODO: elemをHTMLElement型とできるようにする
export function onMouseOverFunc(elem: any): void {
  elem.lastElementChild.style.display = 'inline-block';
};

export function onMouseOutFunc(elem: any): void {
  elem.lastElementChild.style.display = 'none';
}
