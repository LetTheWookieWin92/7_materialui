import React, { Component } from "react";
import ExampleSection from "./exampleSection";
import { withStyles } from "@material-ui/styles";

//Style
import "../../style/example.css";
import { Button } from "@material-ui/core";

const useStyles = theme => ({
	buttonSpacing: {
		margin: '10px'
	}
});

class ButtonExample extends Component {
	state = { 
		containedButtonText: "Press a button",
		containedButtonPresses: 1,
		containedButtonType: "none"
 }

	containedButtonPressed(button) {

		if(button === this.state.containedButtonType)
		{
			let containedButtonPresses = this.state.containedButtonPresses +1;
			let containedButtonText = button + " button has been pressed " + containedButtonPresses + " times";
			this.setState({containedButtonPresses, containedButtonText});
		}
		else
		{
			let containedButtonType = button;
			let containedButtonPresses = 1;
			let containedButtonText = button + " button has been pressed " + containedButtonPresses + " times";
			this.setState({containedButtonPresses, containedButtonText, containedButtonType});
		}

		
	}

	render() { 
		const { classes } = this.props;
		return ( 
			<React.Fragment>
				<ExampleSection title="Contained buttons" description="Used for high emphasis, primary actions within the app." content=
				{
					<React.Fragment>
						<p>{this.state.containedButtonText}</p>
						<Button variant="contained" className={classes.buttonSpacing} onClick={ () => this.containedButtonPressed("Default")}>Default</Button>
						<Button variant="contained" className={classes.buttonSpacing} onClick={ () => this.containedButtonPressed("Primary")} color="primary">Primary</Button>
						<Button variant="contained" className={classes.buttonSpacing} onClick={ () => this.containedButtonPressed("Secondary")} color="secondary">Secondary</Button>
						<Button variant="contained" className={classes.buttonSpacing} onClick={ () => this.containedButtonPressed("Disabled")} disabled>Disabled</Button>
					</React.Fragment>
					
				}/>
				<ExampleSection title="Text buttons" description="Used for lower emphasis actions, such as those found in dialogues or cards. Making use of these helps maintain the emphasis of the primary content" content=""/>

			</React.Fragment>
		 );
	}
}
 
export default withStyles(useStyles)(ButtonExample);


