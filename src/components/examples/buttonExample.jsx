import React, { Component } from "react";
import ExampleSection from "./exampleSection";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import NavigationBar from "../navigationBar";

//Style
import "../../style/example.css";
import { TouchApp } from "@material-ui/icons";

const useStyles = theme => ({
	buttonSpacing: {
		margin: '10px'
	}
});

//Text button example
const textButtonDescriptors = ["great", "good", "fine", "bad", "awful"];
const textButtonConnector = ["are", "aren't"];
const textButtonSubjects = ["Apples", "Carrots", "Blueberries"];

class ButtonExample extends Component {
	state = { 
		containedButtonText: "Press a button",
		containedButtonPresses: 1,
		containedButtonType: "none",

		outlinedButtonColour: "Blue",

		textButtonText: "Press a button",
		textButtonTextState: [0,0,0],

		iconButtonText: "Press a button",
		iconButtonPresses: 1,
		iconButtonType: "none",
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

	outlinedButtonPressed(button) {
		let outlinedButtonColour = button;
		this.setState({outlinedButtonColour});
	}

	textButtonPressed(button) {

		let textButtonTextState = this.state.textButtonTextState;
		let textButtonText = "";

		if(button === "Default")
		{
			textButtonTextState[0] = (textButtonTextState[0] === 2) ? 0 : ++textButtonTextState[0];
		}
		else if(button === "Primary")
		{
			textButtonTextState[1] = (textButtonTextState[1] === 1) ? 0 : ++textButtonTextState[1];
		}
		else
		{
			textButtonTextState[2] = (textButtonTextState[2] === 4) ? 0 : ++textButtonTextState[2];
		}

		textButtonText = textButtonSubjects[textButtonTextState[0]] + " " + textButtonConnector[textButtonTextState[1]] + " " + textButtonDescriptors[textButtonTextState[2]];

		this.setState({textButtonText, textButtonTextState});
	}

	iconButtonPressed(button) {
		if(button === this.state.iconButtonType)
		{
			let iconButtonPresses = this.state.iconButtonPresses +1;
			let iconButtonText = button + " button has been pressed " + iconButtonPresses + " times";
			this.setState({iconButtonPresses, iconButtonText});
		}
		else
		{
			let iconButtonType = button;
			let iconButtonPresses = 1;
			let iconButtonText = button + " button has been pressed " + iconButtonPresses + " times";
			this.setState({iconButtonPresses, iconButtonText, iconButtonType});
		}
	}

	render() { 
		const { classes } = this.props;
		return ( 
			<React.Fragment>
				<NavigationBar textLabel={this.props.title} showBack="Yes" backPressed={this.props.onBackPress}/>
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
				<ExampleSection title="Outlined buttons" description="Used for medium emphasis actions, not as important as primary actions but more important than text actions." content=
				{
					<React.Fragment>
						<Box margin="auto" borderRadius="50%" color="blue" bgcolor={this.state.outlinedButtonColour} width="40px" height="40px" marginBottom="20px"/>
						<Button variant="outlined" className={classes.buttonSpacing} onClick={ () => this.outlinedButtonPressed("Blue")}>Default</Button>
						<Button variant="outlined" className={classes.buttonSpacing} onClick={ () => this.outlinedButtonPressed("Green")} color="primary">Primary</Button>
						<Button variant="outlined" className={classes.buttonSpacing} onClick={ () => this.outlinedButtonPressed("Red")} color="secondary">Secondary</Button>
						<Button variant="outlined" className={classes.buttonSpacing} onClick={ () => this.outlinedButtonPressed("Disabled")} disabled>Disabled</Button>
					</React.Fragment>
					
				}/>
				<ExampleSection title="Text buttons" description="Used for lower emphasis actions, such as those found in dialogues or cards. Making use of these helps maintain the emphasis of the primary content" content=
				{
					<React.Fragment>
						<p>{this.state.textButtonText}</p>
						<Button className={classes.buttonSpacing} onClick={ () => this.textButtonPressed("Default")}>Default</Button>
						<Button className={classes.buttonSpacing} onClick={ () => this.textButtonPressed("Primary")} color="primary">Primary</Button>
						<Button className={classes.buttonSpacing} onClick={ () => this.textButtonPressed("Secondary")} color="secondary">Secondary</Button>
						<Button className={classes.buttonSpacing} onClick={ () => this.textButtonPressed("Disabled")} disabled>Disabled</Button>
					</React.Fragment>
					
				}/>
				<ExampleSection title="Icon & Label buttons" description="These can be used to enhance the UX of any of the previous types of button by adding an icon. Icons are quicker to recognise than text." content=
				{
					<React.Fragment>
						<p>{this.state.iconButtonText}</p>
						<Button variant="contained" className={classes.buttonSpacing} onClick={ () => this.iconButtonPressed("Primary")} startIcon={<TouchApp />} color="primary">Post</Button>
						<Button variant="contained" className={classes.buttonSpacing} onClick={ () => this.iconButtonPressed("Secondary")} startIcon={<TouchApp />} color="secondary">Save draft</Button>
						<Button variant="contained" className={classes.buttonSpacing} onClick={ () => this.iconButtonPressed("Default")} startIcon={<TouchApp />} color="default">Discard</Button>
						
					</React.Fragment>
				}/>

			</React.Fragment>
		 );
	}
}
 
export default withStyles(useStyles)(ButtonExample);


