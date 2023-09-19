const http = require('http');

/* Callback Function */
function rqListener(req, res){
    console.log(req);
}

const server1  = http.createServer(rqListener);

/* Ambiguous Function */
const server2 = http.createServer(function(req,res){
    console.log(req);
    process.exit(); // it quit the server with it event loop
});

/* Error Function */
const server3 = http.createServer((req,res) => {
    console.log(req);
})

server2.listen(3000, ()=>{
    console.log('http://localhost:3000')
} );
