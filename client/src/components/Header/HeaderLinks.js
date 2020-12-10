// /*eslint-disable*/
import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { useLocation, useHistory} from 'react-router-dom'
import {logout} from "../../actions/authActions"





import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from '@material-ui/icons/GitHub';

// @material-ui/icons
import { Apps} from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";


import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const id = useSelector(state => state.auth.id)



  const handleLogout = async () => {
    if(id){
      if(location.pathname !== '/login-page'){
        await dispatch(logout())
      }
    }
    history.push('/login-page')
  }
  

  let dropdownList = [
    <NavLink exact to="/home" className={classes.dropdownLink}>Browse the Stack</NavLink>,
    <NavLink exact to="/wall" className={classes.dropdownLink}>My Wall</NavLink>,
    <NavLink exact to="/about-me" className={classes.dropdownLink}>About the Dev</NavLink>,
      <Button 
        color="transparent"
        onClick={handleLogout}
        >Log Out<ExitToAppIcon className={classes.listItem} />
      </Button>
,

  ]
  if(!id) {
    dropdownList = [
      <NavLink exact to="/about-me" className={classes.dropdownLink}>About the Dev</NavLink>,
      <NavLink exact to="/login-page" className={classes.dropdownLink}>Login Page</NavLink>,
    ]
  }
  
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Navigation"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={dropdownList}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="log-out"
          title="Log out"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <IconButton
            onClick={handleLogout}
          className={classes.navLink}
        >
        <ExitToAppIcon className={classes.listItem} />
        </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow me on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.instagram.com/mcgeekasey/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/Kmcgee92"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons}><GitHubIcon/></i>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/mcgeekasey/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
