import keyFrame from './component/keyFrame.ts';
import {onMouseOverFunc, onMouseOutFunc} from './util/eventFunctions.ts';
import todayString from './util/todayString.ts';

let filePath: string = `../LOG/report-${todayString()}.html`;

let html: string = `
<!doctype html>
<html>
  <head>
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
    <script type="text/javascript">
      const mouseOverFunc = ${onMouseOverFunc.toString()};
      const mouseOutFunc = ${onMouseOutFunc.toString()};
    </script>
  </head>
  <body>
    <p>Hello!</p>
    <div class="key-row">
      ${keyFrame({keys:['a']})}
      ${keyFrame({width:1.5, keys:['b', 'B']})}
      ${keyFrame({keys:['c', 'C', 'Ç']})}
    </div>
    <div class="key-row">
      <div class="key-pad" style="width: 30px;"></div>
      ${keyFrame({keys:['d', 'D']})}
    </div>
  </body>
</html>
`;

await Deno.writeTextFile(filePath, html);
