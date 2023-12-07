const socketIO = require('socket.io');

function initializeSocket(server) {
  const io = socketIO(server, {
    cors: {
      origin: "https://kampus.adaptable.app",
      methods: ["GET", "POST"]
    }
  });

  let users = [];

  io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on("message", data => {
      io.emit("messageResponse", data);
    });

    socket.on("typing", data => (
      socket.broadcast.emit("typingResponse", data)
    ));

    socket.on("newUser", data => {
      users.push({ socketID: socket.id, username: data });
      io.emit("newUserResponse", users);
    });

    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
      users = users.filter(user => user.socketID !== socket.id);
      io.emit("newUserResponse", users);
    });
  });
}

module.exports = initializeSocket;
  