import Head from "next/head";
import Link from "next/link";
import { styles } from "../styles/Home.module.css";

import Landing from "./landing/landing";
import { style } from "@material-ui/system";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query {
    launchesUpcoming {
      mission_name
    }
  }
`;
export default function Home() {
  const { loading, data } = useQuery(query);
  if (loading) return <p>Loading Masterpieces ...</p>;
  console.log(data);

  const missions = data.launchesUpcoming[0].mission_name;
  return <div>{missions}</div>;
}
