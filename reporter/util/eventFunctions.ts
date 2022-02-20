// TODO: elemをHTMLElement型とできるようにする
export function onMouseOverFunc(elem: any): void {
  elem.style.backgroundColor = '#aaaaff';
};

export function onMouseOutFunc(elem: any): void {
  elem.style.backgroundColor = '#ffffff';
}
