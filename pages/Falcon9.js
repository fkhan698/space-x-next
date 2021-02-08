import React from "react";
import Header from "../components/Header";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query {
    rockets {
      name
      description
    }
  }
`;

export default function Falcon9() {
  const { loading, data } = useQuery(query);
  if (loading) return <p>Loading Masterpieces ...</p>;
  console.log(data);
  const rockets = data.rockets[0].name;
  return (
    <>
      <Header />
      <div>{rockets}</div>
    </>
  );
}
