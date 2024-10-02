const http = require('http');

 http.createServer((req,res)=>{

    res.writeHead(200)
    res.write("hola macho");
    res.end();
 })
 .listen(8080)
 console.log("Escuchando en el port:",8080)