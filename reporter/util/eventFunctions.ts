// TODO: elemをHTMLElement型とできるようにする
export function onMouseOverFunc(elem: any): void {
  elem.style.backgroundColor = '#aaaaff';
  elem.lastElementChild.style.display = 'inline-block';
};

export function onMouseOutFunc(elem: any): void {
  elem.style.backgroundColor = '#ffffff';
  elem.lastElementChild.style.display = 'none';
}
