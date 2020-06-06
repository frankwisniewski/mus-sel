# 🐁 *[muːs]*-sel
a small selector library

## Sample
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <script type="text/javascript" src="mussel.js"></script>
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
            .setData('container', 'alert')
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
            .click(e => document.body.removeChild($(e.target).
              parentEl(`[data-container="alert"]`).toNode()))
          .parentEl(`div`)
            .style(`border:3px solid red;padding:1em;`)
      </script>
    </body>
    </html>
