import React from 'react';
import { Fab } from '@material-ui/core';
import NavigationBar from '../navigationBar';
import ExampleSection from './exampleSection';
import { Grid } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const FabExample = ({ title, onBackPress }) => {
    return ( 
        <React.Fragment>
            <NavigationBar textLabel={title} showBack="Yes" backPressed={onBackPress}/>

            <ExampleSection title="Floating action buttons" description="These are used for the most primary or common actions on a screen. You should only use one per screen." content=
            {
                <Grid container spacing={1} >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Fab variant="extended" color="primary" aria-label="add">
                            <Add /> Add
                        </Fab>
                    </Grid>
                </Grid>
            }/>
        </React.Fragment>
     );
}
 
export default FabExample;