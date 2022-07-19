const express = require("express");
const { Server } = require("socket.io");

const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const { sessionMiddleware, wrap, corsConfig } = require("./controllers/serverController");
const { authorizeUser, addFriend, initializeUser, onDisconnect } = require("./controllers/socketController");
const { object } = require("yup");


//initializer
const app = express();

const server = require("http").createServer(app);

const io = new Server(server, {
  cors: corsConfig,
});

//middleware

app.use(helmet());
app.use(cors(corsConfig));
app.use(express.json());
app.use(sessionMiddleware)

app.use("/auth", authRouter);

io.use(wrap(sessionMiddleware));
io.use(authorizeUser)
io.on("connect", socket => {
  initializeUser(socket)


  socket.on("add_friend", (friendName, cb) => {
    addFriend(socket, friendName, cb)
  });

  socket.on("disconnecting", () => onDisconnect(socket))
})

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});