import axios from "axios";

const DeleteData = async (id) => {
  try {
    const data = await axios.delete(
      `https://616e4ec9a83a850017caa908.mockapi.io/userData/${id}`
    );
    return data.status;
  } catch (e) {
    console.log("error", e.message);
  }
};

export default DeleteData;