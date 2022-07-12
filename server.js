const http = require('http');
const HOST = 'http://localhost';
const PORT = 3000;
const status = require('./pcRawUsage.js')
http.createServer((req, res) => {
    let url = req.url;

    if(url === '/status'){
        
        res.end(JSON.stringify(status, null, 2))
    }else{
        res.end('<h1>Seja bem vindO</h1>')
    }
}).listen(PORT,() => console.log(`Servidor rodando na porta ${HOST}:${PORT}`));