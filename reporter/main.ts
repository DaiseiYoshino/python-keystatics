import keyFrame from './component/keyFrame.ts';
import {onMouseOverFunc, onMouseOutFunc} from './util/eventFunctions.ts';
import todayString from './util/todayString.ts';

let filePath: string = `../LOG/report-${todayString()}.html`;

let html: string = `
<!doctype html>
<html>
  <head>
    <style>
      div.key-frame {
        width: 60px;
        height: 60px;

        border: thick outset #aaaaaa;

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
    </style>
    <script type="text/javascript">
      const mouseOverFunc = ${onMouseOverFunc.toString()};
      const mouseOutFunc = ${onMouseOutFunc.toString()};
    </script>
  </head>
  <body>
    <p>Hello!</p>
    ${keyFrame({width:1, keys:['a']})}
    ${keyFrame({width:1.5, keys:['b', 'B']})}
    ${keyFrame({width:1, keys:['c', 'C', 'Ç']})}
  </body>
</html>
`;

await Deno.writeTextFile(filePath, html);
