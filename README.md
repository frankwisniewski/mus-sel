# 🐁 *[muːs]*-query
a small selector library

## Sample
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <script type="text/javascript" src="classquery.js"></script>
    </head>
    <body>
      <h1>Test</h1>
      <script>
        $(`h1`)
          .on(`mouseover`, el => $(el.target).style(``))
          .addStyle(`color:blue;`)
          .addStyle(`border:1px solid gray;`)
        $(document.body)
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
          .getParent()
          .create(`button`)
          .style(`display:block;margin:1em 0;`)
          .html(`delete this div`)
          .click(e => document.body.removeChild($(e.target).parentEl(`div`).v()))
          .parentEl(`div`)
          .style(`border:3px solid red;padding:1em;`)
      </script>
    </body>
    </html>
