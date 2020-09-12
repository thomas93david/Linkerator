import axios from "axios";

export async function getLinks() {
  try {
    const { data } = await axios.get("/routes/links");
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

export async function getTags() {
  try {
    const { data } = await axios.get("/routes/tags");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addLink() {
  try {
    const { data } = await axios.post("/routes/links");
    return data;
  } catch (error) {
    throw error;
  }
}
