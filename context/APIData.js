import React, { useState, useEffect } from "react";
import axios from "axios";
export const BASE_URL = `https://api.spacexdata.com/v4/`;
export const ROCKETS = `${BASE_URL}rockets`;
export const LAUNCHES = `${BASE_URL}launches/upcoming`;

const APIContext = React.createContext();

const APIProvider = props => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // Event Handler for switching between Vehicle spec pages
  const handleSpecPage = () => {
    page === 2 ? setPage(1) : setPage(2);
  };

  const fetchData = async () => {
    try {
      const result = await axios.get(LAUNCHES);
      setData(result.data[0]);
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
        data,
        handleSpecPage
      }}
    >
      {props.children}
    </APIContext.Provider>
  );
};

export { APIProvider, APIContext };
