import axios from "axios";

const DataFetch = async () => {
  const { data } = await axios.get(
    "https://616e4ec9a83a850017caa908.mockapi.io/userData"
  );
  return data;
};

DataFetch();
export default DataFetch;