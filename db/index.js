// Connect to DB
const { Client } = require("pg");
const DB_NAME = "Linkerator";
const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;
const client = new Client(DB_URL);

// database methods

async function createLink({ url, clickCount, comment }) {
  try {
    const {
      rows: [link],
    } = await client.query(
      `
    INSERT INTO links (url, "clickCount", comment, "dateShared")
    VALUES ($1, $2, $3, NOW())
    ON CONFLICT (url) DO NOTHING
    RETURNING *;
    `,
      [url, clickCount, comment]
    );
    return link;
  } catch (error) {
    console.error("Creation of new link failed!");
    throw error;
  }
}

async function createTag({ tagName }) {
  try {
    const {
      rows: [tag],
    } = await client.query(
      `
    INSERT INTO tags ("tagName")
    VALUES ($1)
    RETURNING *;
    `,
      [tagName]
    );
    return tag;
  } catch (error) {
    console.error("Tag creation failed!");
    throw error;
  }
}

async function getAllLinks() {
  console.log("getAllLinks");
  const { rows } = await client.query(
    `SELECT id, url, "clickCount", comment, "dateShared" 
    FROM links;
  `
  );
  const links = await Promise.all(
    rows.map(async (link) => {
      const { rows: tagIds } = await client.query(
        `
    SELECT "tagId"
    FROM link_tag
    WHERE "urlId"=$1
  `,
        [link.id]
      );
      const tags = await Promise.all(
        tagIds.map((tag) => getTagById(tag.tagId))
      );
      link.tags = tags;
      return link;
    })
  );
  return links;
}

async function getTagById(tagId) {
  try {
    const {
      rows: [tag],
    } = await client.query(
      `
    SELECT *
    FROM tags
    WHERE id=$1
    `,
      [tagId]
    );
    return tag;
  } catch (error) {
    throw error;
  }
}

async function addTagToLink({ urlId, tagId }) {
  try {
    const {
      rows: [tagToLink],
    } = await client.query(
      `
    INSERT INTO link_tag ("urlId", "tagId")
    VALUES ($1, $2)
    RETURNING *;
    `,
      [urlId, tagId]
    );
    return tagToLink;
  } catch (error) {
    console.error("Tag not joined to link!");
    throw error;
  }
}

// export
module.exports = {
  client,
  createLink,
  createTag,
  addTagToLink,
  getAllLinks,
  // db methods
};
