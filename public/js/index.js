var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'test2@example.com',
    text: 'Hey. Can we meet at 6.'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
