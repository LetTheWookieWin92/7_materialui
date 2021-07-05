import React, { Component } from "react";

// Components
import Home from "./home";
import NavigationBar from "./navigationBar";
import ButtonExample from "./examples/buttonExample";

//Theme
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
	  primary: {
		light: '#5e7597',
		main: '#314a69',
		dark: '#00233e',
		contrastText: '#ffffff',
	  },
	  secondary: {
		light: '#987d5b',
		main: '#695131',
		dark: '#3c2909',
		contrastText: '#ffffff',
	  },
	  warning:{
		light: '#ffb74d',
		main: '#ff9800',
		dark: '#f57c00',
		contrastText: '#ffffff',
	  },
	},
  });

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayMode: "Home",
		};

		this.changeDisplayMode = this.changeDisplayMode.bind(this);
	}

	changeDisplayMode(mode) {
		this.setState({ displayMode: mode });
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				{this.state.displayMode === "Home" && (
					<React.Fragment>
						<NavigationBar textLabel="MaterialUI Elements" showBack="No"/>
						<Home onSelection={this.changeDisplayMode} />
					</React.Fragment>
				)}
				{this.state.displayMode === "Button" && (
					<React.Fragment>
						<NavigationBar textLabel="Button" showBack="Yes" backPressed={this.changeDisplayMode}/>
						<ButtonExample onBackPress={this.changeDisplayMode}/>
					</React.Fragment>
				)}
			</ThemeProvider>
		);
	}
}

export default Display;
