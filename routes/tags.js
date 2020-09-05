const tagsRouter = require("express").Router();

//insert routes here

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  res.send({ message: "hello from /tags!" });
  next();
});

tagsRouter.get("");
module.exports = tagsRouter;
