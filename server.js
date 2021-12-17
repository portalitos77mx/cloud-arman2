const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('<h>Hola Unifin 4<h/>')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
