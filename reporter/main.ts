import todayString from './util/todayString.ts';

let filePath: string = `../LOG/report-${todayString()}.html`;

const testFunc = (): void => alert('Hello, this is a test!');

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
      window.onload=${testFunc.toString()};
    </script>
  </head>
  <body>
    <p>Hello!</p>
    <div class="key-frame">
      <div class="key-box">
        <span class="key-char">a</span>
      </div>
    </div>
    <div class="key-frame">
      <div class="key-box">
        <span class="key-char">b</span>
      </div>
      <div class="key-box">
        <span class="key-char">B</span>
      </div>
    </div>
    <div class="key-frame">
      <div class="key-box">
        <span class="key-char">c</span>
      </div>
      <div class="key-box">
        <span class="key-char">C</span>
      </div>
      <div class="key-box">
        <span class="key-char">Ç</span>
      </div>
    </div>
  </body>
</html>
`;

await Deno.writeTextFile(filePath, html);
