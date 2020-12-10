
import React, { useState } from "react";
import classNames from "classnames";

//core components
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLinks.js";
import Footer from '../../../components/Footer/Footer.js';
import Parallax from "../../../components/Parallax/Parallax.js";
import HamburgerContents from "../../../components/HamburgerContents/HamburgerContents"


//TODO default wall add option to change
import defaultWall from "../../../assets/img/wallBackground.jpg"


// @material-ui/icons

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../components/Grid/GridContainer.js";
import Grid from "@material-ui/core/Grid";
import GridItem from "../../../components/Grid/GridItem.js";

const useStyles = makeStyles({
  mainBody: {

  },
  image: {
    position:"absolute",
    top: "80px",
    right: 0,
    left: 0,
    bottom: 0,
    width: "100vw",
    height:"100vh",
  },
  body: {
    position: "relative",
    top: "200px",
    display: "flex",
    flexDirection:"row",
    flexWrap: "wrap",
    color: "white",
    left: "280px",
    width:"100vw",
    heigth: "1000vh"
  },
  imageContainer: {
    position: "relative",
    height: "40vh",
    flexGrow: 1,
  }
})

const Home = (props) => {
  
const classes = useStyles()

  return (
    <>
    <img className={classNames(classes.image)} src={defaultWall} alt="wallbackground" />
    <HamburgerContents />
    <div className={classNames(classes.mainBody, classes.container)}>
      <Header
        color="transparent"
        brand="STACKERR"
        rightLinks={<HeaderLinks />}
        fixed
        color="primary"
      />
      <div className={classNames(classes.body, classes.flexMain)}>
      </div>   
    </div>
    </>
  );
};

export default Home

