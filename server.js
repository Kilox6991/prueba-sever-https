const http = require('http')

const fs = require('fs')

const server = http.createServer((req, res) =>{
    let path = './pages'
    let statusCode = 200
    let contentType = 'text/html'
  

    switch (req.url) {
        case '/':
            path += '/index.html'
            break;
        case '/about':
            path += '/about.html'
            break;
        
        
    
        default:
            path += '/404.html'
            res.statusCode = 404
            break;
    }
})

server.listen(3000, '127.0.0.1', () => console.log('Server on...'))