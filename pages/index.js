import Head from "next/head";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Container from "@material-ui/core/Container";
import Homepage from "../components/Homepage";
import { style } from "@material-ui/system";
import Falcon9 from "./Falcon9";
import { gql, useQuery } from "@apollo/client";

const useStyles = makeStyles({
  root: {
    color: "white",
    height: "100vh",
    padding: 0
  },
  title: {
    marginTop: "2rem",
    textAlign: "center",
    textTransform: "uppercase",
    color: "white"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "6rem"
  }
});

const query = gql`
  query {
    launchesUpcoming {
      mission_name
    }
  }
`;
export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container>
        <div>
          <Homepage />
        </div>
      </Container>
    </>
  );
}
