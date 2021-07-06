import React, { Component } from "react";

// Components
import Home from "./home";
import ButtonExample from "./examples/buttonExample";
import ContentMissing from "./examples/contentMissing";

//Theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

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
