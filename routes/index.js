const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!...",
  });
});

//  Attach Routers Below w/ Error Handler
const linksRouter = require("./links");
apiRouter.use("/links", linksRouter);

const tagsRouter = require("./tags");
apiRouter.use("./tags", tagsRouter);

const link_tagRouter = require("./link_tag");
apiRouter.use("./link_tag", link_tagRouter);

apiRouter.use((error, req, res, next) => {
  res.send(error);
});

module.exports = apiRouter;
