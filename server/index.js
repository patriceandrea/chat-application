const express = require("express");
const { Server } = require("socket.io");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const session = require("express-session");
require("dotenv").config();

//initializer
const app = express();

const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3002",
    credentials: "true",
  },
});

//middleware
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3002",
    credentials: true,
  })
);
app.use(express.json());
app.use(session({
  secret: process.env.COOKIE_SECRET,
  credentials: true,
  name: "sid",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.environment === "production"
  }
}))

app.use("/auth", authRouter);

io.on("connect", socket => { })

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});