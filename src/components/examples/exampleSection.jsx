import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import { Paper } from "@material-ui/core";

//Style
import "../../style/example.css"

class ExampleSection extends Component {
    constructor(props) {
		super(props);
		this.state = {
		
		};
	}
    render() { 
        return ( <React.Fragment>
            <h1 className="sectionTitle">{this.props.title}</h1>
			<p className="sectionText">{this.props.description}</p>
			<Paper className="displayBox">{this.props.content}</Paper>
			<Divider className="sectionDivider" />
        </React.Fragment> );
    }
}
 
export default ExampleSection;