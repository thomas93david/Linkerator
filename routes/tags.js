const tagsRouter = require("express").Router();
const { getAllTags, getLinkByTagName } = require("../db");

//insert routes here

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");
  next();
});

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();
  console.log(tags);
  res.send({
    tags,
  });
});

tagsRouter.get("/:tagName/links", async (req, res, next) => {
  const { tagName } = req.params;
  try {
    const allLinks = await getLinkByTagName(tagName);
    res.send({
      allLinks,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter;
