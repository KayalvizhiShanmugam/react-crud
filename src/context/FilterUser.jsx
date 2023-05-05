import { useContext, useEffect, useState } from "react";
import { userData } from "./UserContext";

const FilterUser = (userId) => {
  const [state, setState] = useState(null);
  const userArray = useContext(userData);

  useEffect(() => {
    const userObj = userArray.filter((data) => data.id === userId);
    setState(userObj);
    // console.log(userObj, "filteruser");
  }, [userArray, userId]);

  return state ? state : null;
  //need to filter obj based on id
};

export default FilterUser;