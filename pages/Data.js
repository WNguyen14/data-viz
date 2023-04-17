import axios from "axios";

export const fetchData = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/query");
  } catch (err) {
    console.log(err);
  }
};
