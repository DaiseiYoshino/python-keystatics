import {keyRowInfo} from '../types/types';
import keyFrame from './keyFrame';
import keyPad from './keyPad';

export default (data: keyRowInfo): string => {
  return `
    <div class="key-row">
      ${data.padding ? keyPad(data.padding) : ''}
      ${data.keys.map(keyFrame).join('')}
    </div>
  `
};
