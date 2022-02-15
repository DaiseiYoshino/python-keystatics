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

        position: relative;
      }
      span.key-char {
        font-weight: bold;

        width: 100%;
        height: 100%;

        position: absolute;
        top: 30%;
        text-align: center;
      }
    </style>
    <script type="text/javascript">s
      window.onload=${testFunc.toString()};
    </script>
  </head>
  <body>
    <p>Hello!</p>
    <div class="key-frame">
      <span class="key-char">a</span>
    </div>
  </body>
</html>
`;

await Deno.writeTextFile(filePath, html);
