const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', getHome);

io.on('connection', (socket) => {
	console.log('a user connected');

	socket.on('disconnect', () => {
		console.log('the user is disconnected');
	});
});

http.listen(3000, () => {
	console.log('listening on port 3000');
});





function getHome(req, res) {
	res.sendFile(`${__dirname}/index.html`);
}