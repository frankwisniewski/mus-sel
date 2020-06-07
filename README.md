# 🐁 *[muːs]*-sel
a small selector library
## Sample to create an Modal Alert Box
    <!DOCTYPE html>
    <html lang=de>
    <head>
      <meta charset=UTF-8>
      <title>Document</title>
      <script src="mus-sel.js"></script>
    </head>
    <body>
       <main>
        <h1>myAlert</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rem illo dolore, expedita odit porro ullam? Minima ex harum, quidem.</p>
        <button data-action=click>click me to see an modal Alert-Box</button>
      </main>
      <script>
      myAlert = (bgColor, color, message) =>
        $(document.body)
          .create("div")
            .resetStyles()
            .addStyle(`
              position:absolute;
              top:0px;
              left:0px;
              height:100%;
              width:100%;
              background:rgba(255,255,255,0.5);
              display:flex;
              justify-content:center;
              align-items:center;
              `)
            .setData("container", "alert")
            .create("div")
              .resetStyles()
              .addStyle(`
                width:50%;
                min-width:18em;
                max-width:32em;
                border:1px solid #a00;
                box-sizing:border-box;
                border-radius:10px;
              `)
              .create("h1")
              .resetStyles()
              .addStyle(`
                width:100%;
                display:block;
                padding:0 0.5em;
                font-size:1.5em;
                font-family:sans-serif;
                font-weight:bold;
                line-height:2em;
                background:${bgColor};
                color:${color};
                box-sizing:border-box;
                border-radius:9px 9px 0px 0px;`)
              .html("Message:")
              .getParent()
            .create("p")
              .resetStyles()
              .addStyle(`
                width:100%;
                display:block;
                padding:1em 0.5em;
                font-size:1.25em;
                font-family:sans-serif;
                text-align:center;
                line-height:1.75em;
                box-sizing:border-box;`)
              .html(`${message}`)
              .getParent()
            .create('button')
              .resetStyles()
              .addStyle(`
                cursor:pointer;
                font-size:1.25em;
                line-height:1.5em;
                font-family:sans-serif;
                font-weight:bold;
                background:${bgColor};
                color:${color};
                padding:0em 1em;
                display:block;
                border-radius:.25em;
                margin:1em auto;`)
              .click(e => document.body
                .removeChild($(e.target)
                .parentEl(`[data-container="alert"]`).toNode()))
              .html("OK")
      $(`[data-action="click"]`).click( () =>
          myAlert("#800", "white", "simple <b>OneLiner</b> 😁 !!<br> create an modal alertbox")
      )
      </script>
    </body>
    </html>
