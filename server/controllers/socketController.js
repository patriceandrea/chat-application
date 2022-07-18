const redisClient = require("../redis");

module.exports.authorizeUser = (socket, next) => {
  if (!socket.request.session || !socket.request.session.user) {
    console.log("Bad Request")
    next(new Error("Not authorized"))
  } else {
    socket.user = { ...socket.request.session.user };
    redisClient.hset(
      `userid:${socket.user.username}`,
      "userid",
      socket.user.userid
    );
    next();
  }
}


module.exports.initializeUser = socket => {
  socket.user = { ...socket.request.session.user };
  redisClient.hset(
    `userid:${socket.user.username}`,
    "userid",
    socket.user.userid
  );
  console.log(
    "USERID:",
    socket.user.userid,
    socket.id,
    socket.request.session.user.username
  );

}

module.exports.addFriend = (friendName, cb) => {
  console.log(friendName)
  cb({ done: false, errorMsg: "not valid name" })
} 