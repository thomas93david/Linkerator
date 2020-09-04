import axios from "axios";

export async function getSomething() {
  try {
    console.log("here");
    const { data } = await axios.get("/links");
    console.log("data", data);
    return data;
  } catch (error) {
    throw error;
  }
}
