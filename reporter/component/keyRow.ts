import keyFrame from './keyFrame.ts';
import keyPad from './keyPad.ts';

export default (data: {padding?:number, keys:{width?:number, keys:string[]}[]}): string => {
  return `
    <div class="key-row">
      ${data.padding ? keyPad(data.padding) : ''}
      ${data.keys.map(keyFrame).join('')}
    </div>
  `
};
