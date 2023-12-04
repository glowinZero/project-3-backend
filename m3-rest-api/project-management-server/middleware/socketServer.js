const app = require('./app');
const http = require('http');
const socketIO = require('socket.io');

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Attach Socket.IO to the server
const io = socketIO(server);

// Set the PORT for our app to have access to it. If no env has been set, we hard code it to 5005
const PORT = 5005;

// Express app routes go here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Socket.IO event handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for incoming messages
  socket.on('message', (message) => {
    console.log('Message received:', message);

    // Broadcast the message to all connected clients
    io.emit('message', message);
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
