import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/routes");
    console.log("getSomething data:", data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getLinks() {
  try {
    const { data } = await axios.get("/routes/links");
    // console.log("This is hitting the API getLinks", data);
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
