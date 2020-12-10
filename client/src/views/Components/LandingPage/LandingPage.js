import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

//core components
import Header from "../../../components/Header/Header";
import Footer from '../../../components/Footer/Footer.js';
import GridContainer from "../../../components/Grid/GridContainer.js";
import InfinityScrollSection from '../../../components/InfinityScroll/InfinityScrollSection'

import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Parallax from "../../../components/Parallax/Parallax.js";
import HeaderLinks from "../../../components/Header/HeaderLinks.js";


// Sections for this page
// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

// import styles from assests
import styles from "../../../assets/jss/material-kit-react/views/landingPage";

//initiate styles
const useStyles = makeStyles(styles);

const LandingPage = (props) => {
    const classes = useStyles();
    const {...rest} = props
    return (
        <>
            <Header
            color="transparent"
            brand="STACKERR"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
            height: 400,
            color: "white"
            }}
            {...rest}
            />
          <Parallax filter image={require("../../../assets/img/examples/bg.jpg")}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <h1 className={classes.title}>Welcome to STACKER</h1>
                    <h4>
                      Browse photos that have been shared with the world, or you can sign up and share your own masterpieces.
                    </h4>
                    <br />
                    <Button
                      color="rose"
                      size="lg"
                      href="/signup-page"
                      rel="noopener noreferrer"
                    >
                      Sign up
                      <DoubleArrowIcon/>
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <Footer />
        </>
    );
};

export default LandingPage;