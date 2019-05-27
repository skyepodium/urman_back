const http = require('http')
const socket = require('socket.io')

let server = http.createServer((req, res) => {
}).listen(3000);

const io = socket(server)

io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
        let data = JSON.parse(msg)
        console.log(data)
        console.log(data.name)
        console.log(data.message)
        io.emit('chat', data)
    })
})
