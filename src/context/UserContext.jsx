import React from "react";
import DataFetch from "../config/DataFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const userData = React.createContext(null);
// eslint-disable-next-line react-refresh/only-export-components
export const userDataUpdater = React.createContext(null);

// eslint-disable-next-line react/prop-types
export default function UserContext({ children }) {
  const [state, setState] = React.useState(null);

  const dataUpdater = () => {
    DataFetch()
      .then((val) => setState(val))
      .catch((e) => console.log(e));
  };
  React.useEffect(() => {
    dataUpdater();
  }, []);

  return (
    <>
      <userData.Provider value={state}>
        <userDataUpdater.Provider value={dataUpdater}>
          {children}
        </userDataUpdater.Provider>
      </userData.Provider>
    </>
  );
}