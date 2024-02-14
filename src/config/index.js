const rateLimit = require("express-rate-limit");
const cors = require("cors");

exports.configureApp = (app) => {
  // Rate Limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });
  app.use(limiter);

  // CORS
  app.use(cors());
};
