import KeyRowInfo from '../lib/keyRowInfo.ts';
import keyFrame from './keyFrame.ts';
import keyPad from './keyPad.ts';

export default (data: KeyRowInfo): string => {
  return `
    <div class="key-row">
      ${data.padding ? keyPad(data.padding) : ''}
      ${data.keys.map(keyFrame).join('')}
    </div>
  `
};
