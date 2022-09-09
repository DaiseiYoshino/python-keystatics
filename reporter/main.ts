import keyRow from './component/keyRow.ts';
import {onMouseOverFunc, onMouseOutFunc} from './util/eventFunctions.ts';
import keyboardInfo from './keyboardInfo/win_jp.ts';
import keyTypeToKeyInfo from './util/keyTypeToKeyInfo.ts';
import todayString from './util/todayString.ts';

const filePath = `../LOG/report-${todayString()}.html`;

const keyTypes = JSON.parse(await Deno.readTextFile('../LOG/2022_07_07.txt'));

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

const keyRows = keyTypeToKeyInfo(keyboardInfo, keyTypes);
const keyPart = keyRows.map(keyRowInfo => keyRow(keyRowInfo)).join('');

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
