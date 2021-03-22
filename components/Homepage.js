import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { motion } from "framer-motion";
import Moment from "react-moment";
import { APIContext } from "../context/APIData";

const useStyles = makeStyles({
  root: {
    color: "white",
    height: "100vh",
    padding: 0
  },
  title: {
    marginTop: "2rem",
    fontSize: "3rem",
    textAlign: "center",
    textTransform: "uppercase",
    color: "white"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    marginTop: "6rem",
    marginLeft: "3rem",
    marginRight: "3rem"
  },
  missionsContent: {
    marginTop: "2rem"
  },
  details: {
    marginTop: "2rem",
    color: "white",
    fontSize: 30,
    textAlign: "center"
  },
  countDown: {
    marginTop: "2rem",
    display: "flex",

    justifyContent: "center",
    alignItems: "center"
  },
  countUnit: {
    color: "white",
    fontSize: "3rem",
    justifyContent: "center",
    alignItems: "center",
    margin: "3rem"
  },
  countBox: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    flexDirection: "row",
    textAlign: "center",
    width: "100%",
    fontSize: "2rem"
  },
  span: {
    flexBasis: ""
  }
});

export default function Homepage() {
  const appContext = useContext(APIContext);
  const { data } = appContext;
  const classes = useStyles();
  //Countdown timer function
  const countDown = () => {
    const countDownDate = new Date(data.date_local).getTime();
    //Get today's date and time
    const now = new Date().getTime();
    const distance = countDownDate - now;
    let timeleft = {};
    if (distance > 0) {
      timeleft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString(),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ).toString(),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ).toString(),
        seconds: Math.floor((distance % (1000 * 60)) / 1000).toString()
      };
    } else {
      timeleft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    return timeleft;
  };

  //Countdown timer state
  const [time, setTime] = useState(countDown());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(countDown());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timeSplit = str => (str.length === 1 ? "0" : str[0]);

  return (
    <>
      <div className={classes.container}>
        <motion.div
          animate={{ y: 40 }}
          transition={{ duration: 1, times: [1, 0.3, 6] }}
          className={classes.title}
        >
          Upcoming Missions
          <div className={classes.missionsContent}>
            <motion.div transition={{ duration: 1, times: [1, 0.3, 6] }}>
              <h2 className={classes.title}>{data.name}</h2>
              <div className={classes.details}>{data.details}</div>
              <div className={classes.details}>
                Launch Date:{" "}
                <Moment format="MM/DD/YYYY">{data.date_utc}</Moment>
              </div>
            </motion.div>
          </div>
          <div className={classes.countDown}>
            <div className={classes.countUnit}>
              <p>Days</p>
              <div className={classes.count}>
                <div className={classes.countBox}>
                  <span>{timeSplit(time.days)}</span>
                  <span>
                    {time.days.length === 1 ? time.days : time.days[1]}
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.countUnit}>
              <p>Hours</p>
              <div className={classes.count}>
                <div className={classes.countBox}>
                  <span>{timeSplit(time.hours)}</span>
                  <span>
                    {time.hours.length === 1 ? time.days : time.hours[1]}
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.countUnit}>
              <p>Minutes</p>
              <div className={classes.count}>
                <div className={classes.countBox}>
                  <span>{timeSplit(time.minutes)}</span>
                  <span>
                    {time.minutes.length === 1 ? time.minutes : time.minutes[1]}
                  </span>
                </div>
                <div className={classes.countBox}></div>
              </div>
            </div>
            <div className={classes.countUnit}>
              <p>Days</p>
              <div className={classes.count}>
                <div className={classes.countBox}>
                  <span>{timeSplit(time.seconds)}</span>
                  <span>
                    {time.seconds.length === 1 ? time.days : time.seconds[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
