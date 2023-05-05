import axios from "axios";

const PostData = async (body) => {
  const newData = await axios.post(
    "https://616e4ec9a83a850017caa908.mockapi.io/userData/",
    body
  );
  return newData;
};

export default PostData;