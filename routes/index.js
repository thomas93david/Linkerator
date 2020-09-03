const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/links", (req, res, next) => {
  res.send({
    message: "Links coming soon",
  });
});
module.exports = apiRouter;
