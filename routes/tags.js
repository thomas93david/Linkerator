const tagsRouter = require("express").Router();

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");
  next();
});

tagsRouter.get("");
module.exports = tagsRouter;
