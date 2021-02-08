import React, { useState, useEffect } from "react";
import axios from "axios";
export const BASE_URL = `https://api.spacexdata.com/v4/`;
export const ROCKETS = `${BASE_URL}rockets`;
export const DRAGONS = `${BASE_URL}dragons`;

const APIContext = React.createContext();

const APIProvider = props => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get(ROCKETS);
      setData(result.data);
      console.log(result.data);
    } catch (e) {
      if (e) {
        console.log(e.message, "Error fetching data");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <APIContext.Provider
      value={{
        data
      }}
    >
      {props.children}
    </APIContext.Provider>
  );
};

export { APIProvider, APIContext };
