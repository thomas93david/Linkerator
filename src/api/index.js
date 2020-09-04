import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/routes");
    console.log("data", data);
    return data;
  } catch (error) {
    throw error;
  }
}
