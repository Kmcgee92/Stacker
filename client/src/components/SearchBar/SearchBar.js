import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  grow: {
    display: "flex",
    justifySelf: "center",
    flexDirection: "row",
    margin: "0 auto",
    padding: "10px 0",
    borderRadius: "20px",
    width: "70vw",
    textAlign: "center",
  },
  searchButton: {
    margin: "10px",
    padding: "10px",
    borderRadius: "90px",
  }
})

export default function SearchBar({setPhotos, setQuery}) {
  const classes = useStyles();
  const [newQuery, setNewQuery] = useState("latest")


  const handleQuery = (e) => {
    e.preventDefault()
    setPhotos([])
    setQuery(newQuery)
  }

  return (
    <form onSubmit={handleQuery}>
    <div className={classes.grow}>
      <input
        className={classes.grow}
        onChange={(e) => {setNewQuery(e.target.value)}}
        placeholder="Browse our photos...."
      />
    </div>

    </form>
  );
}
