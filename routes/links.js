const linksRouter = require("express").Router();
const { getAllLinks, createLink } = require("../db");

linksRouter.get("/", async (req, res, next) => {
  try {
    const allLinks = await getAllLinks();
    res.send({
      allLinks,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});


linksRouter.use((req, res, next) => {
  console.log("A request is being made to /links");
});

module.exports = linksRouter;
