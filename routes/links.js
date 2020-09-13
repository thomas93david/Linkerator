const linksRouter = require("express").Router();
const { getAllLinks, createLink } = require("../db");

linksRouter.post("/", async (req, res, next) => {
  const { url, date, comment, clickCount = 0, tags = [] } = req.body;
  const tagArr = tags.trim().split(/\s+/);
  const linkData = {};

  try {
    linkData.url = url;
    linkData.date = date;
    linkData.comment = comment;
    linkData.clickCount = clickCount;
    linkData.tags = tagArr;

    const createdLink = await createLink(linkData);

    if (createdLink) {
      res.send({ createdLink });
    } else {
      ({
        name: "Missing Post Data",
        message: "Post Data is missing",
      });
    }
  } catch ({ name, message }) {
    console.log(name, message);
    next({ name, message });
  }
});

linksRouter.get("/", async (req, res, next) => {
  try {
    const allLinks = await getAllLinks();
    console.log("Not hitting after this");
    res.send({
      allLinks,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = linksRouter;
