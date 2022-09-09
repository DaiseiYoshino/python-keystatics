// TODO: elemをHTMLElement型とできるようにする
export function onMouseOverFunc(elem: any): void {
  elem.lastElementChild.style.display = 'inline-block';
  elem.lastElementChild.style.opacity = '1';
}

export function onMouseOutFunc(elem: any): void {
  elem.lastElementChild.style.display = 'none';
  elem.lastElementChild.style.opacity = '0';
}
