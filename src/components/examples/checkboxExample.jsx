import React from 'react';
import NavigationBar from '../navigationBar';
import ExampleSection from './exampleSection';
import { Checkbox, Grid, Typography } from '@material-ui/core';

const CheckboxExample = ({ title, onBackPress }) => {
    return ( 
        <React.Fragment>
            <NavigationBar textLabel={title} showBack="Yes" backPressed={onBackPress}/>
            <ExampleSection title="Basic checkbox" description="Simple on/off switch." content=
            {
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                    </Grid>
                </Grid>
            }/>
        </React.Fragment>
     );
}
 
export default CheckboxExample;