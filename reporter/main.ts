let now: Date = new Date();
let nowString: string = `${now.getFullYear()}_${('0'+now.getMonth()).substring(-2)}_${('0'+now.getDate()).substring(-2)}`;

let filePath: string = `../LOG/report-${nowString}.html`;

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
