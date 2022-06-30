const express = require("express");
const { Server } = require("socket.io");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routes/authRouter");

//initializer
const app = express();

const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  }
})

//middleware
app.use(helmet());
app.use(cors({
  origin: "http//:localhost:3000",
  credentials: true,
})
);
app.use(express.json());

app.use("/auth", authRouter);

io.on("connect", socket => { })

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});