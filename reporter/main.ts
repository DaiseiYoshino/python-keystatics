import todayString from './util/todayString.ts';

let filePath: string = `../LOG/report-${todayString()}.html`;

const testFunc = (): void => alert('Hello, this is a test!');

let html: string = `
<!doctype html>
<html>
  <head>
    <script type="text/javascript">
      window.onload=${testFunc.toString()};
    </script>
  </head>
  <body>
    <p>Hello!</p>
  </body>
</html>
`;

await Deno.writeTextFile(filePath, html);
