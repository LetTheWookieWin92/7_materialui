import React from 'react';
import NavigationBar from '../navigationBar';
import ExampleSection from './exampleSection';
import { Checkbox, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({

    paper: {
      margin: theme.spacing(1),
      backgroundColor: '#ff9800',
    },

  }));

const CheckboxExample = ({ title, onBackPress }) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    return ( 
        <React.Fragment>
            <NavigationBar textLabel={title} showBack="Yes" backPressed={onBackPress}/>
            <ExampleSection title="Basic checkbox" description="Simple on/off switch." content=
            {
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    
                    <Grow in={checked}>
                        <Paper elevation={4} className={classes.paper}>
                            <Typography variant="body1" style={{textAlign: 'center'}}>ON</Typography>
                        </Paper>
                    </Grow>
                        <Checkbox checked={checked} onChange={handleChange} color="primary" />
                    </Grid>
                </Grid>
            }/>
            <ExampleSection title="Checkboxes with FormGroup" description="FormGroups can be used to group related controls." content=
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