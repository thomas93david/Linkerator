const apiRouter = require("express").Router();

//  Attach Routers Below w/ Error Handler
const linksRouter = require("./links");
apiRouter.use("/links", linksRouter);

const tagsRouter = require("./tags");
apiRouter.use("/tags", tagsRouter);

apiRouter.use((error, req, res, next) => {
  res.send(error);
});

module.exports = apiRouter;
