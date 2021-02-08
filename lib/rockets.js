import React from "react";
import { useState, useEffect } from "react";

import { ROCKETS } from "../pages/api/API";
import Link from "next/link";
import axios from "axios";

export default function GetRocketsData() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(ROCKETS);
      setItems(result.data);
      console.log(result.data);
    };
    fetchItems();
  }, []);

  return {
    ...items
  };
}
