const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const session = require('express-session');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const indexRoutes = require('./src/routes/indexRoute');
const userRoutes = require('./src/routes/userRoute');
const chatRoutes = require('./src/routes/chatRoute');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

mongoose.set('useFindAndModify', false);
dotenv.config();
const port = process.env.PORT || 3000;

// DB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected successful'))
  .catch((err) => console.log(err));

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: false,
  }),
);

io.on('connection', (socket) => {
  socket.on('chatMessage', (msg) => {
    io.emit('chat message', msg);
  });
});
// Routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/chat', chatRoutes);

server.listen(port, () => console.log(`Listening on port ${port}`));
