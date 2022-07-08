import keyRow from './component/keyRow.ts';
import {onMouseOverFunc, onMouseOutFunc} from './util/eventFunctions.ts';
import todayString from './util/todayString.ts';

const filePath = `../LOG/report-${todayString()}.html`;

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
  }

  div.balloon span {
    top: 10px;
    left: 10px;

    position: absolute;
  }
</style>
`;

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
    ${keyRow({keys: [{width:1.5, chars:[{name:'a', count:1}]}, {chars: [{name:'b', count:2}, {name:'B', count:20}]}, {chars: [{name:'c', count:3}, {name:'C',count:33}, {name:'Ç', count:333}]}]})}
    ${keyRow({padding: 0.5, keys:[{chars: [{name:'d',count:123}, {name:'D', count:12}]}]})}
  </body>
</html>
`;

await Deno.writeTextFile(filePath, html);
