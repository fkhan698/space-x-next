import React from "react";
import Header from "../components/Header";
import Moment from "react-moment";
import { motion } from "framer-motion";
import { gql, useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
    fontSize: "3rem"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "6rem"
  },
  falconImage: {
    width: "20%",
    top: "10%",
    height: "100%",

    marginRight: "10rem"
  },
  table: {
    maxWidth: 500,
    color: "white"
  },
  tableCell: {
    fontSize: "1.5rem",
    color: "white"
  }
});

const query = gql`
  query {
    rockets {
      name
      description
      height {
        feet
        meters
      }
      diameter {
        feet
        meters
      }
      mass {
        kg
        lb
      }
      cost_per_launch
      first_flight
    }
  }
`;

export default function Falcon9() {
  const classes = useStyles();
  const { loading, data } = useQuery(query);
  if (loading) return <p>Loading Masterpieces ...</p>;
  console.log(data);
  const rockets = data.rockets[1];

  return (
    <>
      <div className={classes.root}>
        <Header />
        <motion.h2
          animate={{ y: 50 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className={classes.title}
        >
          Falcon 9 Overview
        </motion.h2>
        <Container className={classes.container}>
          <TableContainer>
            <motion.table
              animate={{ x: 50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}></TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableCell} align="center">
                      {rockets.description}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell} align="center">
                      Height: {rockets.height.feet} ft / {rockets.height.meters}{" "}
                      meters
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell} align="center">
                      Mass: {rockets.mass.lb} lb / {rockets.mass.kg} kg
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell} align="center">
                      Cost per Launch: ${rockets.cost_per_launch}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell} align="center">
                      First Flight:{" "}
                      <Moment format="MM/DD/YYYY">
                        {rockets.first_flight}
                      </Moment>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </motion.table>
          </TableContainer>

          <div className="rocketImage">
            <motion.div
              animate={{ y: -45 }}
              transition={{ duration: 1, times: [1, 0.3, 6] }}
            >
              <img
                src="https://raw.githubusercontent.com/tipenehughes/space-x-app/master/src/Assets/img/F9.png"
                className={classes.falconImage}
              ></img>
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  );
}
