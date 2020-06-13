# 🐁 *[muːs]*-sel
a small selector library
## Sample: create an Modal Alert Box
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name=viewport content="width=device-width, initial-scale=1">
      <title>Document</title>
      <script src="./mus-sel.js"></script>
    </head>
    <body>
       <main>
        <h1>myAlert</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rem illo dolore, expedita odit porro ullam? Minima ex harum, quidem.</p>
        <button data-action=click>click me to see an modal Alert-Box</button>
      </main>
      <script>
        $().insSheet (`
    @media only screen{
      @keyframes myAlertShow {
        0% {transform: scale(0);}
        50% {transform: scale(1.1);}
        85% {transform: scale(0.90);}
        100% {transform: scale(1);}
      }
      @keyframes myAlertHide{
        0% {transform: scale(1.0);}
        15% {transform: scale(1.1);}
        30% {transform: scale(1.0);}
        90% {transform: scale(0);opacity:0;}
      }
    }
    `)
      const myStyles={
        container : `position:absolute;top:0px;
              left:0px;height:100%;
              width:100%;background:rgba(255,255,255,0.3);
              display:flex;justify-content:center;
              align-items:center;`,
        message : `min-width:18em;
                transform:scale(0);
                max-width:90%;
                animation: myAlertShow 0.24s;
                animation-delay:100ms;
                animation-fill-mode: forwards;
                background:white;border-radius:8px;
                box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);`,
        button : `cursor:pointer;font-size:1.25em;
                line-height:1.25em;font-family:sans-serif;
                font-weight:bold;background:#88f;
                border:1px solid #88f;
                box-shadow: inset 0px 0px 0px 3px rgba(255,255,255,1);
                color:white;padding:0.375em 1.25em;
                display:block;border-radius:.5em;
                margin:1em auto;outline: none;`,
        headline: `
                font-size:1.5em;
                font-family:sans-serif;text-align:center;color:#555;`,
        paragraph : `display:block;
                font-size:1em;line-height:1.75em;
                font-family:sans-serif;text-align:center;color:#555;`,
    }
      myAlert = (header, message) => {
        let alertBox = document.createElement('div')
        $(alertBox)
          .create("div")
            .addStyle(myStyles.container)
            .setData("container", "alert")
            .create("div")
              .addStyle(myStyles.message)
            .create('h1')
              .addStyle(myStyles.headline)
              .html(`${header}`)
              .getParent()
            .create('p')
              .addStyle(myStyles.paragraph)
              .html(`${message}`)
              .getParent()
            .create('button')
              .addStyle(myStyles.button)
              .on('mouseover', e => e.target.style.background='#77f')
              .on('mouseout', e => e.target.style.background='#88f')
              .click(e => {
                $(e.target).
                    getParent()
                    .addStyle('animation: myAlertHide 0.24s;')
                window.setTimeout( () =>{
                document.body
                .removeChild(alertBox)},200)})
              .html("OK") 
            document.body.appendChild(alertBox)
      }
      $(`[data-action="click"]`).click( () =>
          myAlert("🐁 [muːs]-sel ","Chaining is funny 😁 !!<br><b>Modal Alertbox</b>")
      )
      </script>
    </body>
    </html>
