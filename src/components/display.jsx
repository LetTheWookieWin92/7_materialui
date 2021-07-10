import React, { Component } from "react";

// Components
import Home from "./home";
import ButtonExample from "./examples/buttonExample";
import ContentMissing from "./examples/contentMissing";
import HowThemeWorksExample from "./examples/howThemeWorksExample";

//Theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { Typography } from "@material-ui/core";

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

			case 'How theme works':
				return <HowThemeWorksExample title={mode} onBackPress={this.changeDisplayMode} />

			case 'Button':
				return <ButtonExample title={mode} onBackPress={this.changeDisplayMode} />
		
			default:
				return <ContentMissing  title={mode} onBackPress={this.changeDisplayMode} />
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
