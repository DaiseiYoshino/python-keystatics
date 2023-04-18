import KeyRowInfo from '../lib/keyRowInfo.ts';
import keyPad from './keyPad.ts';

export default (data: KeyRowInfo): string => {
  return `
    <div class="key-row">
      ${data.padding ? keyPad(data.padding) : ''}
      ${data.keys.map(key => key.toElem()).join('')}
    </div>
  `
};
