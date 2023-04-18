import "https://deno.land/x/dotenv@v3.2.0/load.ts";

import {onMouseOverFunc, onMouseOutFunc} from './util/eventFunctions.ts';
import win_keyboardInfo from './keyboardInfo/win_jp.ts';
import mac_keyboardInfo from './keyboardInfo/mac_jp.ts';
import * as KeyBoardSettings from './keyboardInfo/keyBoardSettings.ts';
import KeyBoardInfo from './lib/keyBoardInfo.ts';
import SingleCharInfo from './lib/SingleCharInfo.ts';
import keyTypeToKeyInfo from './util/keyTypeToKeyInfo.ts';
import todayString from './util/todayString.ts';
import nameConverter from './util/nameConverter.ts';
import {keyBoardSettings} from './types/types.ts';

let keyboardInfo:keyBoardSettings = []

switch (Deno.env.get('KEYBOARD')) {
  case 'win_jp':
    keyboardInfo = win_keyboardInfo;
    break;
  case 'mac_jp':
    keyboardInfo = mac_keyboardInfo;
    break
  default:
    keyboardInfo = win_keyboardInfo;
    break;
}

const kbsManager = new KeyBoardSettings.Manager(keyboardInfo);

const filePath = `../LOG/report-${todayString()}.html`;

const keyTypes = JSON.parse(await Deno.readTextFile('../LOG/2023_03_24.txt'));

const stylePart = `
<style>
  div.key-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  div.key-pad {
    height: 60px;

    box-sizing: border-box;
  }

  div.key-frame {
    width: 60px;
    height: 60px;

    border: thick outset #aaaaaa;

    box-sizing: border-box;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  div.key-box {
    flex-grow: 1;
    width: 50%;
    border: medium solid #cccccc;
    box-sizing: border-box;
    position: relative;

    transition-property: background-color;
    transition-duration: .3s;
  }
  
  div.key-box:hover {
    background-color: #ffffff !important;
  }

  span.key-char {
    font-weight: bold;

    width: 100%;
    height: 100%;

    position: absolute;
    top: 20%;
    text-align: center;
  }

  div.balloon {
    display: none;

    top: 30px;
    left: 20px;
    width: 100px;
    height: 50px;
    border: thin solid #aaaaff;
    background-color: #eeeeee;
    z-index: 1;

    position: absolute;

    transition-property: opacity;
    transition-duration: .4s;
    opacity: 0;
  }

  div.balloon span {
    top: 10px;
    left: 10px;

    position: absolute;
  }
</style>
`;

const keyBoardInfo: KeyBoardInfo = keyTypeToKeyInfo(kbsManager, keyTypes);
keyBoardInfo.mapAffectToChar((char: SingleCharInfo) => {
  char.name = nameConverter(char.name);
});
const keyPart = keyBoardInfo.toElem();

const html = `
<!doctype html>
<html>
  <head>
    ${stylePart}
    <script type="text/javascript">
      const mouseOverFunc = ${onMouseOverFunc.toString()};
      const mouseOutFunc = ${onMouseOutFunc.toString()};
    </script>
  </head>
  <body>
    ${keyPart}
  </body>
</html>
`;

await Deno.writeTextFile(filePath, html);
