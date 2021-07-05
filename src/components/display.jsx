import React, { Component } from "react";

// Components
import Home from "./home";
import ButtonExample from "./examples/buttonExample";
import ContentMissing from "./examples/contentMissing";

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

	renderDisplayMode(mode) {

		switch (mode) {
			case 'Home':
				return <Home onSelection={this.changeDisplayMode} />

			case 'Button':
				return <ButtonExample onBackPress={this.changeDisplayMode} />
		
			default:
				return <ContentMissing onBackPress={this.changeDisplayMode} />
		}
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
			
				{this.renderDisplayMode(this.state.displayMode)}

			</ThemeProvider>
		);
	}
}

export default Display;
