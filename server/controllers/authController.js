module.exports.handleLogin = (res, req) => {
  if (req.session.user && req.session.user.username) {
    console.log("logged in")
    res.json({ loggedIn: true, username: req.session.user.username });
  } else {
    res.json({ loggedIn: false })
  }
}