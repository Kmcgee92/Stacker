import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {addAlbumToUser, fetchAlbums} from '../../actions/albumActions'


//core components
import CustomInput from '../CustomInput/CustomInput'


// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';

//@material-ui/material-icons
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';


//initiate styles
const useStyles = makeStyles({
  component: {
    position: "fixed",
    border: "1px solid black",
    color: "white",
    height: "100vh",
    width: "250px",
    top: 80,
    zindex: "2000",
    backgroundPosition:"left",
  },
  compWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  hamburger: {
  backgroundColor: "rgb(0, 0, 0)" ,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: "100vh",
  color: "lightGrey",
  fontWeight: "bold",
  position: "relative",
  transform: "translate(-50 %, -50 %)",
  padding: "20px",

  },
  listOfAlbums: {
    display: "flex",
    padding: 0,
    flexDirection: "column",
    justifyContent:"flex-start",
    listStyleType: "none",
    borderColor: "grey",
    borderWidth: "2px 0 0 0",
    borderStyle: "solid",
    paddingTop: "100px",
    margin: 0,
    
  },
  flexAlbum: {
    fontFamily: "roboto",
    fontSize: "1.2rem",
    paddingTop:"10px",
    paddingBottom:"10px",
    borderRadius:"10px",
    "&:hover": {
      backgroundColor: "rgba(135, 47, 165, 0.4)"
    },
  },
  addAlbum: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    fontFamily: "roboto",
    fontSize: "1.2rem",
    paddingTop: "10px",
    paddingBottom: "10px",

  },
  icon: {
    marginTop: "20px"
  },
  active: {
    borderRadius: "10px",
    backgroundColor: "rgba(135, 47, 165, 0.4)"
  },
  white: {
    color: "white",
    "&:hover": {
      color:"grey"
    }
  }
});

const HamburgerContents = () => {
  const [isActive, setIsActive] = useState(0)
  const [showAlbumAdd, setShowAlbumAdd] = useState(false)
  const [albumName, setAlbumName] = useState("")
  const [isAnyAlbums, setIsAnyAlbums] = useState(false)
  const classes = useStyles();
  const dispatch = useDispatch()

  //verify current user on page
  const id = useSelector(state => state.auth.id)
  //preload albums in redux
  useEffect(() => {
    dispatch(fetchAlbums(id))
  },[])
  //preload albums on page
  const albums = useSelector(state => state.wall.albums)

  let btnClass = classNames({
    [classes.active]: isActive
  })

const handleCreateAlbum = (e) => {
  setShowAlbumAdd(!showAlbumAdd)
  e.preventDefault()
  dispatch(addAlbumToUser(albumName ,id))
}

const renderAddorCancel = () => 
( 
  <div className={classes.addAlbum}>
    { !showAlbumAdd ? 
        <IconButton
          className={classes.icon}
          onClick={() => { setShowAlbumAdd(true) }}
        >
          <div
            className={classes.white}
          >
          <AddCircleIcon />
          </div>
        </IconButton> 
      :
      <>
        <IconButton
          onClick={() => { setShowAlbumAdd(false) }}
        >
          <div className={classes.white}>
            <CloseIcon />
          </div>
        </IconButton>
          <form onSubmit={handleCreateAlbum}>
          <CustomInput
            setStateFunc={setAlbumName}
            labelText="Album Name..."
          >

          </CustomInput>
        </form>
      </>
    }
  </div>

)


  return (
    <div className={classes.compWrapper}>
      <div className={classes.component}>
        <div className={classes.hamburger}>
            <div className={classes.header}>
              PROFILE PIC AND NAME
            </div>
              Albums
              <ul className={classes.listOfAlbums}>
                { albums.length !== 0 ? albums.map((album, id) => (
                  <li 
                  key={id} 
                  className={isActive === id+1 ? btnClass : ""}>
                    <div
                      className={classes.flexAlbum}
                      onClick={() => {setIsActive(id+1)}}
                      >
                      <IconButton>
                        <div className={classes.white}>
                          <PhotoAlbumIcon/>
                        </div>
                      </IconButton>
                      {album.name}
                    </div>
                  </li>
                )) : <div>Add Your First Album!</div> }
              </ul>
                {renderAddorCancel()}
        </div>
      </div>
    </div>
  );
};

export default HamburgerContents;