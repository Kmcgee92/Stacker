import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//core components
import Header from "../Header/Header.js";
import Footer from '../Footer/Footer.js';
import HeaderLinks from "../Header/HeaderLinks.js";


// import styles from assests
import styles from "../../assets/jss/material-kit-react/views/landingPage";


//import Photos / Gifs
import pageNotFoundFlask from "../../assets/img/react-flask.gif"
import profileImage from "../../assets/img/profilePic.jpg"



const useStyles = makeStyles({
  pageNotFound: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(24, 32, 38)",
    backgroundSize: "cover",
    fontSize: "100px",
    opacity: 1
  },
  resetH1: {
    margin: "0 auto",
    paddingTop: "200px",
    color: "rgb(89, 232, 251)"


  },
  reactFlask: {
    margin: "0 auto",
  },
  profileStyles: {
    borderRadius: "270px",
    margin: "0 auto",
    height: "250px",
    width: "250px",
    padding: "40px",
  },
  ...styles
})


const AboutMe = (props) => {
  const classes = useStyles();
  const { ...rest } = props
  return (
    <>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div>
        <div className={classes.pageNotFound}>
          <h1 className={classes.resetH1}>
            Profile Page WIP
					</h1>
          <img
            src={profileImage}
            className={classes.profileStyles}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;