const http = require(`http`);

// const server = http.createServer((req, res) => console.log(req.url, req.method, req.headers));

// const server = http.createServer((req,res) => {
//     console.log(req.url, req.method, req.headers);
//     res.setHeader('Content-Type', 'text/html');
//     res.write("Hi Every one we learnig NodeJS");
//     res.end();
// })

const server = http.createServer((req,res) => {
    let url = req.url;
    if(url === '/'){
        res.write(` <html>
                        <head>
                            <title>Staring</title>
                        </head>
                        <body>
                            <h1>Starting Page</h1>
                            <form action='/message' method='POST'>
                            <input type='text' name='name' placeholder='Enter your name'/>
                            <button type='submit'> </button>
                            </form>
                        </body>
                    </head>
        `);

        res.end()
    }
    else if(url === '/welcome'){
        res.write(` <html>
                        <head>
                            <title>Welcome</title>
                        </head>
                        <body>
                            <h1>Welcome Page</h1>
                        </body>
                    </head>
        `);
        res.end()
    }
    else if(url === '/message' && req.method === 'POST'){
        res.write(` <html>
                        <head>
                            <title>Welcome</title>
                        </head>
                        <body>
                            <h1>Welcome Page</h1>
                            <p>OH, Hi ${req.body}</p>
                        </body>
                    </head>
        `);
        res.end()
    }
})

server.listen(3000, console.log ('http://localhost:3000'));