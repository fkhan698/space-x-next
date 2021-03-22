import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Typography from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 25
  },
  link: {
    color: "white",
    margin: 5
  },
  nav: {
    margin: "2rem"
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <Typography className={classes.label}>
        <Link href="/">
          <img
            src={
              "https://raw.githubusercontent.com/tipenehughes/space-x-app/25827f442c19bcd444c55eeb7278854df80affbf/src/Assets/img/logo.svg"
            }
            className={classes.brand}
          ></img>
        </Link>
      </Typography>
      <Typography className={classes.label}>
        <Link href="/Falcon9">
          <motion.a whileHover={{ scale: 1.3 }}>
            <a className={classes.link}> Falcon 9</a>
          </motion.a>
        </Link>
      </Typography>
      <Typography className={classes.label}>
        <Link href="/Starship">
          <motion.a whileHover={{ scale: 1.3 }}>
            <a className={classes.link}> Starship</a>
          </motion.a>
        </Link>
      </Typography>
      <Typography className={classes.label}>
        <Link href="/Dragons">
          <motion.a whileHover={{ scale: 1.3 }}>
            <a className={classes.link}> Dragons</a>
          </motion.a>
        </Link>
      </Typography>
    </div>
  );
}
