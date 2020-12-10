import React from 'react';

// @material-ui core
import { makeStyles } from "@material-ui/core/styles";

//import gif
import pageNotFoundFlask from "../../../assets/img/react-flask.gif"

const useStyles = makeStyles( {
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
		paddingTop: "50px",
		color: "rgb(89, 232, 251)"


	}, 
	reactFlask: {
		margin: "0 auto",
	}
})


const PageNotFound = () => {
	const classes = useStyles()

	return (
		<div>
			<div className={classes.pageNotFound}>
					<h1 className={classes.resetH1}>
							404 Page Not Found!
					</h1>
					<img 
						src={pageNotFoundFlask}
						className={classes.reactFlask}
					/>

			</div>

		</div>
	);
};

export default PageNotFound;