import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import cuid from "cuid";


// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

//core components
import Header from "../../../components/Header/Header";
import Footer from '../../../components/Footer/Footer.js';
import GridContainer from "../../../components/Grid/GridContainer.js";
import SearchBar from "../../../components/SearchBar/SearchBar"
import InfinityScrollSection from '../../../components/InfinityScroll/InfinityScrollSection'
import DropZone from '../../../components/DropZone/DropZone'
import DropList from '../../../components/DropZone/DropList'
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Parallax from "../../../components/Parallax/Parallax.js";
import HeaderLinks from "../../../components/Header/HeaderLinks.js";



// import styles from assests
import styles from "../../../assets/jss/material-kit-react/views/landingPage";




//initiate styles
const useStyles = makeStyles({
    searchBar: {

    },
    ...styles
});

export default function Home (props) {
    const { ...rest } = props
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const id = useSelector(state => state.auth.id)
    const [photos, setPhotos] = useState([])


    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        // Loop through accepted files
        acceptedFiles.map(file => {
            // Initialize FileReader browser API
            const reader = new FileReader();
            // onload callback gets called after the reader reads the file data
            reader.onload = function (e) {
                // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
                setPhotos(prevState => [...prevState,{ id: cuid(), src: e.target.result }]);
            };
            // Read the file as Data URL (since we accept only images)
            reader.readAsDataURL(file);
            return file;
        });
    }, []);




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
            {photos ? photos.map(photo => <img src={photo.src} key={photo.id}></img>) : null}
            <Parallax image={require("../../../assets/img/mountain-lake2.jpg")}>
                <DropZone onDrop={onDrop} accept={"image/*"}/>
                {/* <DropList photoArray = {photos} /> */}
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                    <InfinityScrollSection {...classes} />
            </div>
            <Footer />
        </>
    );
};
