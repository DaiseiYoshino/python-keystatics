import {keyRowInfo} from '../types/types.ts';
import keyFrame from './keyFrame.ts';
import keyPad from './keyPad.ts';

export default (data: keyRowInfo): string => {
  return `
    <div class="key-row">
      ${data.padding ? keyPad(data.padding) : ''}
      ${data.keys.map(keyFrame).join('')}
    </div>
  `
};
