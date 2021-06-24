import React, { Component } from "react";
import { Paper } from "@material-ui/core";

//Style
import "../../style/example.css"

class ButtonExample extends Component {
	state = {};
	render() {
		return <React.Fragment>
			<h1 className="sectionTitle">Contained buttons</h1>
			<p className="sectionText">Used for high emphasis, primary actions within the app.</p>
			<Paper className="displayBox">hi</Paper>

		</React.Fragment>;
	}
}

export default ButtonExample;
