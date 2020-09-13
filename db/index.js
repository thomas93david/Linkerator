// CONNECT TO DB
const { Client } = require("pg");
const DB_NAME = "Linkerator";
const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;
const client = new Client(DB_URL);

// DATABASE METHODS

async function createLink({ url, date, comment,clickCount, tags = [] }) {
  try {
    const tagResults = await Promise.all(
      tags.map((tag) => createTag(tag.tagName))
    );
    const {
      rows: [result],
    } = await client.query(
      `
      INSERT INTO links(url, date, comment, "clickCount")
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `,
      [url, date, comment, clickCount]
    );
    await Promise.all(tagResults.map(({ id }) => createTagLink(result.id, id)));
    result.tags = tagResults;
    return result;
  } catch (error) {
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

async function createTagLink(linkId, tagId) {
  try {
    const {
      rows: [result],
    } = await client.query(
      `
            INSERT INTO link_tag("urlId", "tagId")
            VALUES ($1, $2)
            RETURNING *;
            `,
      [linkId, tagId]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function getLinkByTagName(tagName) {
  try {
    const { rows: urlId } = await client.query(
      `
      SELECT url.id
      FROM links
      JOIN post_tags ON posts.id=post_tags."postId"
      JOIN tags ON tags.id=post_tags."tagId"
      WHERE tags.name=$1;
    `,
      [tagName]
    );

    return await Promise.all(urlId.map((link) => getLinkById(url.id)));
  } catch (error) {
    throw error;
  }
}

async function getAllLinks() {
  console.log("getAllLinks");
  const { rows } = await client.query(
    `SELECT id, url, "clickCount", comment, "date" 
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
async function getAllTags() {
  try {
    const { rows: tags } = await client.query(`
      SELECT *
      FROM tags;
    `);

    return tags;
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
  createTagLink,
  getAllTags,
  getLinkByTagName,
  getTagById,
  addTagToLink,
  getAllLinks,
};
