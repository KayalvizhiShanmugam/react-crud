import axios from "axios";

const EditData = async (id, body) => {
  try {
    const data = await axios.put(
      `https://616e4ec9a83a850017caa908.mockapi.io/userData/${id}`,
      body
    );
    return data.status;
  } catch (e) {
    console.log("error", e.message);
  }
};

export default EditData;