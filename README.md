# RHFetch
A wrapper for the fetch api created by Gerard Banasig

##Usage

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <script src="RHFetch.js"></script>
    </head>
    <body>
        <h1 id="app"></h1>    
        <script>                      
            RHFetch
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .result(r => {alert(r.title)});                                                  
        </script>    
    </body>
    </html>
