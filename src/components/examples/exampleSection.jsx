import React from 'react';
import Divider from '@material-ui/core/Divider';
import { Paper } from "@material-ui/core";

//Style
import "../../style/example.css"


const ExampleSection = ({ title, description, content }) => {
	return ( 
	<React.Fragment>
		<h1 className="sectionTitle">{title}</h1>
		<p className="sectionText">{description}</p>
		<Paper className="displayBox">{content}</Paper>
		<Divider className="sectionDivider" />
	</React.Fragment> );
}
 
export default ExampleSection;