# socketio-101

Learning socket.io by creating a chat application (yeah.. why not? ¯\_(ツ)_/¯).
This is the very first time I use WebSockets.
Based on [Get Started: Chat application](http://socket.io/get-started/chat/) guide from the docs.

## Running

`yarn` and `nodemon` should be installed globally.

```sh
$ yarn
$ npm start
```

-----

## Random notes taken

> WebSockets are a bi-directional, full-duplex, persistent connection from a web browser to a server.

(source: [http://socketo.me/docs](http://socketo.me/docs))

- There is a persisten connection between client and server.
- Both client and server can send data at anytime
- `ws://` is the URL schema for WebSockets protocol.
- WebSockets are language-independent on the server side. There are many implementations of WebSockets in many backend languages. I pick NodeJS.
- Socket.io seems to be the easiest way to get started. There are also [`ws`](https://github.com/websockets/ws) and [`WebSockets-Node`](https://github.com/theturtle32/WebSocket-Node) which are other NodeJS implementations of WebSockets.
- `$ yarn add socket.io` - Socket.io ships with both server and client side libraries.

### Server

- WS server can be created with Express.
- First we import `http` module to create a web server from an Express instance.
- Then we import `io` from `socket.io` with created `http` instance above.
- `io.on('connection')` listens for a client's connection. It takes a `socket` object as a parameter which we can use to listen to messages being sent from the client.
- A "message" can be a String, ArrayBuffer, Files(Blob), or even Binary data.
- Server can broadcast a message to everyone using `io.emit()`.

### Client

- Socket.io provides a client library to use in the browser `/socket.io/socket.io.js` which exposes `io` object globally.
- We can create a new socket connection using `const socket = io()`.
- The ideas are pretty much the same with on the Server:
	- The socket sends data to the server with `socket.emit(<EVENT_NAME>, <VALUE>)`
	- It also listens to data sent from the server with `socket.on(<EVENT_NAME>)`

### To summarize

- Server and Client open connections. The connection stays persisten until Client closes the browser.
- Once a connection is opened, Server and Client can sent/receive data between each other at anytime.

02/12/2016

-----

## Homeworks

- created another event named `system` to display system message (when a user logs in/logs out).
- client: listen to `system` event and add a special CSS class name for the message.
