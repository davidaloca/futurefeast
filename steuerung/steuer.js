const WS = require("ws")

const ws = new WS.WebSocket('ws://192.168.1.100:8080');
document.ws = ws
ws.on('error', console.error);

ws.on('open', function open() {

});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});

function left() {
    document.ws.send("left")
}

function right() {
    ws.send("right")
}

function up() {
    ws.send("forward")
}

function back() {
    ws.send("back")
}

function printMessage() {
    document.getElementById('output').innerHTML = 'Erfolgreich Getestet!';
}

