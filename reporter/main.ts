import todayString from './util/todayString.ts';

let filePath: string = `../LOG/report-${todayString()}.html`;

let html: string = `
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <p>Hello!</p>
  </body>
</html>
`;

await Deno.writeTextFile(filePath, html);
