const apiRouter = require("express").Router();

//  Attach Routers Below w/ Error Handler
const linksRouter = require("./links");
apiRouter.use("/links", linksRouter);

const tagsRouter = require("./tags");
apiRouter.use("/tags", tagsRouter);

// apiRouter.get("/", (req, res, next) => {
//   res.send({
//     message: "API is under construction!...",
//   });
// });

apiRouter.use((error, req, res, next) => {
  res.send(error);
});

module.exports = apiRouter;
