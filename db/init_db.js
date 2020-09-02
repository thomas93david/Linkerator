// code to build and initialize DB goes here
// not yet adding other folders for methods
// this should use the client connection from pg (imported via index.js) and
// build an initial dataset.
const {
  client, createLink, createTag, addTagToLink
  // other db methods
} = require("./index");
const { NavDropdown } = require("react-bootstrap");

async function buildTables() {


  //I have await client.query here - may not be needed as these are run with a .then()
  try {
    client.connect();
    console.log ("Dropping tables ...");
    // drop tables in correct order
    await client.query(`
      DROP TABLE IF EXISTS linkTagJoin;
      DROP TABLE IF EXISTS links;
      DROP TABLE IF EXISTS tags;
    `); 
    // build tables in correct order
    //do we want to make varchar > 255 for url in links???

    //timestamp needs to be added on link addition, not on table build

    await client.query(`
      CREATE TABLE links (
        id SERIAL PRIMARY KEY,
        url VARCHAR (255) UNIQUE NOT NULL,
        "clickCount" INTEGER,
        comment TEXT,
        "dateShared" TIMESTAMPTZ NOT NULL DEFAULT NOW() 
      );
      CREATE TABLE tags (
        id SERIAL PRIMARY KEY,
        "tagName" varchar (255) UNIQUE
      );
      CREATE TABLE linkTagJoin (
        id SERIAL PRIMARY KEY,
        "urlId" INTEGER REFERENCES links(id),
        "tagId" INTEGER REFERENCES tags(id)
      );
    `);
    console.log ("Finished building tables");
  } catch (error) {
    console.error("Table drop and create did not complete.")
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data - links first
    console.log ("Entering initial data set for URL's (Links).");
    await createLink({
      url:  "www.google.com",
      clickCount: 1,              //new links always start with click count 1 (should this be 0?)
      comment: "Some Comment 1",
    });
    await createLink({
      url:  "www.espn.com",
      clickCount: 1,              
      comment: "Some Comment 2",
    });
    await createLink({
      url:  "www.cnn.com",
      clickCount: 1,              
      comment: "Some Comment 1",
    });
    await createLink({
      url:  "www.vox.com",
      clickCount: 1,              
      comment: "Some Comment 1",
    });
    await createLink({
      url:  "www.duckduckgo.com",
      clickCount: 1,              
      comment: "Some Comment 1",
    });
    await createLink({
      url:  "www.sport1.de",
      clickCount: 1,              
      comment: "Some Comment 1",
    });
    await createLink({
      url:  "www.der-postillon.com",
      clickCount: 1,              
      comment: "Some Comment 1",
    });
    console.log ("Initial Links created!");
  } catch (error) {
    console.error ("Error creating initial Links!");
    throw error;
  }
try {
  //now add some tags
  console.log ("Creating some initial tags");
  await createTag({
    tagName: "Tag 1"
  })
  await createTag({
    tagName: "Tag 2"
  })
  await createTag({
    tagName: "Tag 3"
  })
  await createTag({
    tagName: "Tag 4"
  })
  await createTag({
    tagName: "Tag 5"
  })
  await createTag({
    tagName: "Tag 6"
  })
  await createTag({
    tagName: "Tag 7"
  });
  console.log ("Initial Tags created!");  
  } catch (error) {
    console.error ("Error creating initial Tags!");
    throw error;
  }
try {
  //add some tags to our new links
  console.log ("Adding tags to links");
  await addTagToLink({
    urlId:  1, 
    tagId:  1
  })
  await addTagToLink({
    urlId:  1, 
    tagId:  2
  })
  await addTagToLink({
    urlId:  1, 
    tagId:  1
  })
  await addTagToLink({
    urlId:  2, 
    tagId:  1
  })
  await addTagToLink({
    urlId:  3, 
    tagId:  1
  })
  await addTagToLink({
    urlId:  1, 
    tagId:  4
  })
  await addTagToLink({
    urlId:  1, 
    tagId:  5
  })
  await addTagToLink({
    urlId:  1, 
    tagId:  6
  })
  await addTagToLink({
    urlId:  7, 
    tagId:  1
  });
  console.log ("Tags added to links!");  
} catch (error) {
  console.error ("Error adding tags to links!");
  throw error;
}

}


buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
