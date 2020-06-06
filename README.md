# 🐁 [muːs]-query
a small selector library

## Sample
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <script type="text/javascript" src="musquery.js"></script>
    </head>
    <body>
      <h1>Test</h1>
      <script>
        $(`h1`)
          .on(`mouseover`, el => $(el.target).style(``))
          .addStyle(`color:blue;`)
          .addStyle(`border:1px solid gray;`)
        const myNewDiv = $(document.body)
          .create(`div`)
          .addClass(`class1, class2`)
          .create(`button`)
          .insHtml(`test`)
          .on(`click`, () => $(`.class1`)
            .addStyle(`background:red;padding:1em;`))
          .getParent()
          .create(`p`)
          .insHtml(`OK`)
          .getParent()
          .create(`select`)
          .addOptions([`select1`, `select2`, `select3`])
          .on(`change`, e => alert(e.target.value))
      </script>
    </body>
    </html>
