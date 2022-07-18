const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const redisClient = require("./redis");

const sessionMiddleware = session({
  secret: process.env.COOKIE_SECRET,
  credentials: true,
  name: "sid",
  store: new RedisStore({ client: redisClient }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.environment === "production",
    httpOnly: true,
    expires: 1000 * 60 * 60 * 24 * 7,
    sameSite: process.env.environment === "production" ? "none" : "lax",
  },
})

module.exports = { sessionMiddleware }; 