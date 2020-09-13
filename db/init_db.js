// code to build and initialize DB goes here
// not yet adding other folders for methods
// this should use the client connection from pg (imported via index.js) and
// build an initial dataset.
const {
  client,
  createLink,
  createTag,
  addTagToLink,
  getAllLinks,
  // other db methods
} = require("./index");

async function buildTables() {
  //I have await client.query here - may not be needed as these are run with a .then()
  client.connect();
  try {
    console.log("Dropping tables ...");
    await client.query(`
      DROP TABLE IF EXISTS link_tag;
      DROP TABLE IF EXISTS links;
      DROP TABLE IF EXISTS tags;
    `);

    //timestamp needs to be added on link addition, not on table build

    await client.query(`
      CREATE TABLE links (
        id SERIAL PRIMARY KEY,
        url VARCHAR (255) UNIQUE NOT NULL,
        "clickCount" INTEGER,
        comment TEXT,
        date VARCHAR NOT NULL 
      );
      CREATE TABLE tags (
        id SERIAL PRIMARY KEY,
        "tagName" varchar (255) UNIQUE
      );
      CREATE TABLE link_tag (
        id SERIAL PRIMARY KEY,
        "urlId" INTEGER REFERENCES links(id),
        "tagId" INTEGER REFERENCES tags(id)
      );
    `);
    console.log("Finished building tables");
  } catch (error) {
    console.error("Table drop and create did not complete.");
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data - links first
    console.log("Entering initial data set for URL's (Links).");
    await createLink({
      url: "www.google.com",
      clickCount: 11,
      comment: "World-wide Domination is our goal",
      date: "9/12/2020",
    });
    await createLink({
      url: "www.espn.com",
      clickCount: 21,
      comment: "Main-stream sports",
      date: "9/12/2020",
    });
    await createLink({
      url: "www.cnn.com",
      clickCount: 22,
      comment: "News for you",
      date: "9/12/2020",
    });
    await createLink({
      url: "www.vox.com",
      clickCount: 34,
      comment: "Opinions for you",
      date: "9/12/2020",
    });
    await createLink({
      url: "www.duckduckgo.com",
      clickCount: 10,
      comment: "Privacy Search",
      date: "9/12/2020",
    });
    await createLink({
      url: "www.sport1.de",
      clickCount: 41,
      comment: "Bundesliga, Formel 1, Formula 1",
      date: "9/12/2020",
    });
    await createLink({
      url: "www.der-postillon.com",
      clickCount: 52,
      comment: "German version of The Onion",
      date: "9/12/2020",
    });
    await createLink({
      url: "www.babylonbee.com",
      clickCount: 35,
      comment: "Satire and prophecy",
      date: "9/12/2020",
    });
    console.log("Initial Links created!");
  } catch (error) {
    console.error("Error creating initial Links!");
    throw error;
  }
  try {
    //now add some tags
    console.log("Creating some initial tags");
    await createTag({
      tagName: "Tag 1",
    });
    await createTag({
      tagName: "Tag 2",
    });
    await createTag({
      tagName: "Tag 3",
    });
    await createTag({
      tagName: "Tag 4",
    });
    await createTag({
      tagName: "Tag 5",
    });
    await createTag({
      tagName: "Tag 6",
    });
    await createTag({
      tagName: "Tag 7",
    });
    console.log("Initial Tags created!");
  } catch (error) {
    console.error("Error creating initial Tags!");
    throw error;
  }
  try {
    //add some tags to our new links
    console.log("Adding tags to links");
    await addTagToLink({
      urlId: 1,
      tagId: 1,
    });
    await addTagToLink({
      urlId: 1,
      tagId: 2,
    });
    await addTagToLink({
      urlId: 1,
      tagId: 1,
    });
    await addTagToLink({
      urlId: 2,
      tagId: 1,
    });
    await addTagToLink({
      urlId: 3,
      tagId: 1,
    });
    await addTagToLink({
      urlId: 1,
      tagId: 4,
    });
    await addTagToLink({
      urlId: 1,
      tagId: 5,
    });
    await addTagToLink({
      urlId: 1,
      tagId: 6,
    });
    await addTagToLink({
      urlId: 7,
      tagId: 1,
    });
    console.log("Tags added to links!");
  } catch (error) {
    console.error("Error adding tags to links!");
    throw error;
  }
}

async function testDB() {
  try {
    console.log("Calling updateLink on link[0]");
    const link = await getAllLinks();
    console.log(link);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

buildTables()
  .then(populateInitialData)
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
