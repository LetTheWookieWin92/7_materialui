import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class NavigationBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6">MateriaulUI Practice</Typography>
					</Toolbar>
				</AppBar>
			</React.Fragment>
         );
    }  
}
 
export 
default NavigationBar;