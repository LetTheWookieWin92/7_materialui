import React from 'react';
import NavigationBar from '../navigationBar';

//Style
import "../../style/contentMissing.css";

//Img
import contentMissing from '../../img/contentMissing.png';

const ContentMissing = (props) => {
    return ( 
        <React.Fragment>
            <NavigationBar textLabel="Content Missing" showBack="Yes" backPressed={props.onBackPress}/>
            <img src={contentMissing} style={{alignSelf: 'center'}} width="250" height="250" alt="Content Missing"/>
            <h1 className="titleText">Oops! We're still working on this content</h1>
            <p className="titleText">Try again soon :)</p>
        </React.Fragment>
     );
}
 
export default ContentMissing;