// Components
import React, { Component } from 'react';
import NavigationBar from "./navigationBar";
import { Typography } from '@material-ui/core';

const HomePage = () => {
    return ( 
        <React.Fragment>
            <NavigationBar textLabel="MaterialUI" showBack="No"/>
            <Typography variant="h1">hello</Typography>
        </React.Fragment>
     );
}
 
export default HomePage;