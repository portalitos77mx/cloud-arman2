const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('<h1>Hola Unifin 30<h1/>')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
