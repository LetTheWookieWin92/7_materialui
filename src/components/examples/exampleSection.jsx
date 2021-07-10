import React from 'react';
import Divider from '@material-ui/core/Divider';
import { Paper, Typography } from "@material-ui/core";

//Style
import "../../style/example.css"


const ExampleSection = ({ title, description, content }) => {
	return ( 
	<React.Fragment>
		<Typography variant="h2" style={{marginTop: 20}}>{title}</Typography>
		<Typography variant="body1">{description}</Typography>
		<Paper className="displayBox">{content}</Paper>
		<Divider className="sectionDivider" />
	</React.Fragment> );
}
 
export default ExampleSection;