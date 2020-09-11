import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/routes");

    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getLinks() {
  try {
    const { data } = await axios.get("/routes/links");

    console.log(data.allLinks);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTags() {
  try {
    const { data } = await axios.get("/routes/tags");

    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchQueryResults() {
  try {
    const { data } = await axios.get("/routes/links");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createLink(url, comment, dateShared, tags) {
  try {
    const { data } = await axios.post("/routes/links", {
      url,
      comment,
      dateShared,
      tags,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
