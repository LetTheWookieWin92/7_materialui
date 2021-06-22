import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import { ArrowBack } from "@material-ui/icons";

class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textLabel: this.props.textLabel,
		};

	}

	render() {
		return (
			<React.Fragment>
				<AppBar position="static">
					<Toolbar>
						{this.props.showBack === "Yes" && (
							<IconButton edge="start" color="inherit" aria-label="menu" onClick={ () => {this.props.backPressed("Home")}} >
								<ArrowBack />
							</IconButton>
						)}
						<Typography variant="h6">{this.state.textLabel}</Typography>
					</Toolbar>
				</AppBar>
			</React.Fragment>
		);
	}
}

export default NavigationBar;
