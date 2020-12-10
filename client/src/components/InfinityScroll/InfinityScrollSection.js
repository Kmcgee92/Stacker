import React, {useState, useEffect, useRef } from 'react';
import loadingGif from '../../assets/img/purpleInfinity.gif';
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { Draggable, Droppable } from 'react-drag-and-drop';

// nodejs library that concatenates classes
import classNames from "classnames";

//core components
import SearchBar from "../SearchBar/SearchBar"
import CustomPhoto from "../CustomPhoto/CustomPhoto"


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";



// import styles from assests
import styles from "../../assets/jss/material-kit-react/views/componentsSections/typographyStyle";
import photoFilters from "../../assets/jss/material-kit-react/components/parallaxStyle"
import { FullscreenExit } from '@material-ui/icons';

//initiate styles
const useStyles = makeStyles({
    container: {
      display:"flex",
      flexWrap: "wrap",
      listStyleType: "none",
      padding: "0 0 0 0",
      margin: "0 30px",
    },
    imageContainer: {
      position: "relative",
      height: "40vh",
      flexGrow: 1,
    },
  gifLoading: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: " 0 auto",
    height: "250px",
    display: "block",


    paddingBottom: "20px"

  },
});


const InfinityScroll = (props) => {
    const classes = useStyles();

    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [query, setQuery] = useState("latest")
    const [totalPages, setTotalPages] = useState("infinity")
    const perPage = 10
    const pageEnd = useRef()


    useEffect(()=> {
      (async () => {
          const res = await fetch(`/api/unsplash/${pageNumber}/${query}/${perPage}`)

          if (res.ok) {
              const data = await res.json()
              setPhotos((p) => [...p, ...data.results])
              setTotalPages(() => [data.total_pages])
          } else {
            throw res
          }
        })()
    },[pageNumber, query])


    
    useEffect(() => {
      if(loading){
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
              setLoading(!loading)
              loadImages()
            }
          }, {threshold: 1})
          observer.observe(pageEnd.current)
      }
    },[loading])
    const loadImages = () => {
        setTimeout(()=>setPageNumber(prevNum => prevNum + 1), 700)
      
    }

    return (
        <>
          <h1>
          <div>
            <div className={classNames(classes.searchBar)}>
              <SearchBar 
              setPhotos={setPhotos}
              setQuery={setQuery}
              />
            </div>
          </div>
          </h1>
            <ul className={classes.container}>
              {photos.length !== 0 ? 
              photos.map((photo, id) => (
                  <CustomPhoto
                  key={id}
                  photo={photo}
                  id={id}
                  {...classes}
                  />
              ))
              : null}
            </ul>
        { photos.length === 0 ? <i>
          </i>: null}
            <div className={classes.gifLoading}>
                <img 
                className={classes.gifLoading}
                src={loadingGif} 
                alt='Loading Gif' 
                ref={pageEnd}

                />
            </div>
        </>
        );
}


export default InfinityScroll;

