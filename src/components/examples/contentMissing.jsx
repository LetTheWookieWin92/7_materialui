import React from 'react';
import NavigationBar from '../navigationBar';

//Style
import "../../style/contentMissing.css";

//Img
import contentMissing from '../../img/contentMissing.png';
import { Typography } from '@material-ui/core';

const ContentMissing = (props) => {
    return ( 
        <React.Fragment>
            <NavigationBar textLabel="Content Missing" showBack="Yes" backPressed={props.onBackPress}/>
            <img src={contentMissing} style={{alignSelf: 'center'}} width="250" height="250" alt="Content Missing"/>
            <Typography variant="h1"  style={{ textAlign: 'center'}}>Oops! We're still working on this content</Typography>
            <Typography variant="body1"  style={{ textAlign: 'center'}}>Try again soon :)</Typography>
        </React.Fragment>
     );
}
 
export default ContentMissing;