
import React, { useState, useEffect, useRef } from 'react';
import {useDispatch} from 'react-redux'
import {sendPhoto} from "../../actions/pictureActions"


// nodejs library that concatenates classes
import classNames from "classnames";


// @material-ui/icons
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxIcon from '@material-ui/icons/AddBox';
import GetAppIcon from '@material-ui/icons/GetApp';

//@material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';


import { container, roseColor} from "../../assets/jss/material-kit-react.js";

const useStyles = makeStyles({
  blackOverlay: {
    position: "absolute",
    // display: "flex",
    // alignItems: "flex-end",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, .6)", /* Black see-through */
    transition: ".5s ease",
    opacity: 0,
    color: "#fff",
    '&:hover': {
      background: "rgba(0, 0, 0, 0, .8)", /* Black see-through */
      color: "#white",
      fontSize: "14px",
      padding: "20px",
      textAlign: "center",
      opacity: 1,
      border: "none",
    }
  },
  img: {
    minHeight: "100%",
    maxHeight: "30vh",
    minWidth: "100%",
    objectFit: "cover",
    verticalAlign: "bottom",
    boxSizing: "borderBox",
    transition: "all .2s ease-in",
    transition: "all 0s ease-out",

  },
  overlayHeart: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlayHeartImg: {
    tintColor: '#fff',
  },
  profileImg: {
    borderRadius: "270px",
  },
  flexMain: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  topFlexContainer: {
    display:"flex",
    flexDirection: "row",
    listStyleType: "none",
    fontSize: "10px",
  },
  bottomFlexContainer: {
    display:"flex",
    alignItems: "flex-end",
    flexDirection: "row",
    listStyleType: "none",
    fontSize: "10px",
  },
  flexItem: {
    textAlign: "center",
  },

  grid: {
    height: "100%"
  },
  heartVisualFlex: {
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
  },
  heartVisual:{

  }
})


const CustomPhoto = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const {photo, id, imageContainer} = props
  const { first_name, location, profile_image } = photo.user

  const [firstName, setFirstName] = useState(first_name?first_name:"fellowStacker")
  const [located, setLocated] = useState(location?location:"")
  const [profileImage, setProfileImg] = useState(profile_image? profile_image :require("../../assets/img/faces/profile.png"))
  const [heart, setHeart] = useState(false)
  const [heartVisual, setHeartVisual] = useState(false)
  const [likes, setLikes] = useState(photo.user.total_likes)
  
  // const timer = () => {
  //   setHeartVisual(!heartVisual)
  // }
  // if(heartVisual) setTimeout(timer(), 1000)

  const handleLikes = () => {
    setHeart(!heart)
    if(!heart) setLikes(prev => prev+1);
    if(heart) setLikes(prev => prev-1);
  }

  const handleAddPhoto = () => {
    dispatch(sendPhoto(photo.urls.small))
  }
  // const renderHeart = () => {
  //   setHeartVisual((prev)=>!prev)
  // }

  const renderOverlay = () => {
    console.log(photo)
    return (
    <>
      <div className={classes.blackOverlay}>
        <Grid className={classNames(classes.grid)}>
          <Grid>
                <div className={
                  classNames(
                    classes.flexMain, 
                    classes.topFlexContainer)
                  }>
                  <div className={classes.flexItem}>
                    <img 
                    className={classes.profileImg}
                    src={profileImage.small}
                    />
                    {" " + firstName}
                  </div>
                  <div className={classes.flexItem}>{located}</div>
                </div>        
          </Grid>
          <Grid>
            <div
              style={{ color: "fff", height: "250px" }}
            >
                {/* {heart ? <div className={classes.heartVisualFlex}>{renderHeart()} */}
                  {/* {heartVisual ? <FavoriteIcon style={{ color: roseColor }}/> : null} */}
                {/* </div> : null} */}
            </div>
          </Grid>

          <Grid>
            <div className={
                classNames(
                  classes.flexMain,
                  classes.bottomFlexContainer)
              }>
              <div className={classes.flexItem}>
              <IconButton
                onClick={handleLikes}
                size="small"
                color="inherit"
                >
                {heart ? <FavoriteIcon style={{ color: roseColor }} /> : <FavoriteBorderIcon />}
              </IconButton>
              {likes} likes
              </div>
              <div className={classes.flexItem}>
                  <IconButton
                    onClick={handleAddPhoto}
                    size="small"
                    color="inherit"
                  >
                      <AddBoxIcon />
                  </IconButton>
                  <a href={photo.links.download} download>
                    <IconButton
                      size="small"
                      color="inherit"
                    >
                        
                      <GetAppIcon/>
                    </IconButton>
                  </a>
              </div>
            </div>
          </Grid>

        </Grid>
      </div>
    </>
      )
  }

  return (
    <li key={id} className={imageContainer}>
      <img
        className={classes.img}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
      {renderOverlay()}
    </li>
  );
};

export default CustomPhoto;