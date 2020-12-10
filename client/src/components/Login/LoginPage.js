import React, {useState} from "react";

import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom'
//redux actions
import { login } from '../../actions/authActions'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
// core components
import Header from "../Header/Header.js";
import HeaderLinks from "../Header/HeaderLinks.js";
import Footer from "../Footer/Footer.js";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import CardFooter from "../Card/CardFooter.js";
import CustomInput from "../CustomInput/CustomInput.js";

//scss styles
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

// images for signin/signout
import image from "../../assets/img/examples/sign.jpg";
import downArrow from "../../assets/img/down-arrow.gif"

const useStyles = makeStyles({
    downRightArrow: {
        transform: "rotate(270deg)",
        alignSelf: "center",
        height: "60px",
        width: "80px",
        boxSizing: "borderBox",
        padding: "0px",
        margin: "0px"
    },
    downLeftArrow: {
        transform: "rotate(90deg)",
        alignSelf:"center",
        height:"60px",
        width:"80px",
        boxSizing: "borderBox",
        padding: "0px",
        margin: "0px"
    },
    ...styles
});

export default function LoginPage(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden"); //cardHidden
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [arrow, setArrow] = useState(false)
    
    const id = useSelector(state => state.auth.id)

    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    const prepDemo = (e) => {
        e.preventDefault()
        setFirstName("FellowStacker")
        setEmail("fellowStacker@stacker.com")
        setPassword("password")
        setArrow(true)
    }

    //render loading page here! then have loading page render home

    if(id) return <Redirect to='/home'/>;

    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="STACKERR"
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h3>Login</h3>
                                        <div className={classes.socialLine}>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <TwitterIcon/>
                                            </Button>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <FacebookIcon/>
                                            </Button>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className={"fab fa-google-plus-g"} />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <p className={classes.divider}>Or Be Classical</p>
                                    <CardBody>
                                        <CustomInput
                                            inputValue={firstName}
                                            setStateFunc={setFirstName}
                                            labelText="First Name..."
                                            id="first"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            inputValue={email}
                                            setStateFunc={setEmail}
                                            labelText="Email..."
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            inputValue={password}
                                            setStateFunc= {setPassword}
                                            labelText="Password"
                                            className="pass"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Icon className={classes.inputIconsColor}>
                                                            lock_outline
                                                        </Icon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "on"
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        {arrow ? <img
                                            alt={"right Arrow"}
                                            className={ classes.downRightArrow}
                                            src={downArrow}
                                        /> : null}
                                        <Button 
                                        simple 
                                        color="primary" 
                                        size="lg"
                                        onClick={handleLogin}
                                        >
                                            log in
                                        </Button>
                                        {arrow ? <img
                                            alt={"left Arrow"}
                                            className={ classes.downLeftArrow}
                                            src={downArrow}
                                        /> : null}
                                    </CardFooter>
                                    <GridContainer justify="center">

                                    <CardFooter className={classes.cardFooter}>
                                            <CardFooter>
                                                <Button
                                                    onClick={prepDemo}
                                                    color="github"
                                                    href="/login-page"
                                                >
                                                    Demo
                                                </Button> 
                                                <Button
                                                    color="primary"
                                                    href="/signup-page"
                                                >
                                                    <i>
                                                        Not a member already?
                                                    </i>
                                                </Button> 
                                            </CardFooter>
                                        </CardFooter>
                                    </GridContainer>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}
