const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', (socket) => {
	console.log('a user connected');
	io.emit('system', {
		message: 'an anonymous user is connected.'
	});

	socket.on('disconnect', () => {
		console.log('the user is disconnected');
		io.emit('system', {
			message: 'a user is disconnected'
		});
	});

	socket.on('chat message', (msg) => {
		console.log(`received: "${msg.message}" from ${msg.alias}.`);
		io.emit('chat message', msg);
	});
});

http.listen(3000, () => {
	console.log('listening on port 3000');
});
