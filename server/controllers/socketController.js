module.exports.authorizeUser = (socket, next) => {
  if (!socket.request.session || !socket.request.session.user) {
    console.log("Bad Request")
    next(new Error("Not authorized"))
  } else {
    next();
  }
}