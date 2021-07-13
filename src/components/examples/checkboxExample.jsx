import React from 'react';
import NavigationBar from '../navigationBar';
import ExampleSection from './exampleSection';
import { Checkbox, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// Checkbox form
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({

    paper: {
      margin: theme.spacing(1),
      backgroundColor: '#ff9800',
    },

  }));

const CheckboxExample = ({ title, onBackPress }) => {
    const classes = useStyles();

    //Basic checkbox
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    //Checkbox form
    const [formState, setFormState] = React.useState({
        cheese: false,
        grapes: false,
        wine: false,
    });
    const handleFormChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.checked});
    }
    const { cheese, grapes, wine } = formState;

    return ( 
        <React.Fragment>
            <NavigationBar textLabel={title} showBack="Yes" backPressed={onBackPress}/>
            <ExampleSection title="Basic checkbox" description="Simple on/off switch." content=
            {
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                        {checked && (
                            <Paper elevation={4} className={classes.paper}>
                            <Typography variant="body1" style={{textAlign: 'center'}}>ON</Typography>
                        </Paper>
                        )}
                        <Checkbox checked={checked} onChange={handleChange} color="primary" />
                    </Grid>
                </Grid>
            }/>
            <ExampleSection title="Checkboxes with FormGroup" description="FormGroups can be used to group related controls." content=
            {
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Paper elevation={4} style={{maxWidth: 500}}>
                            <Typography variant="h4" style={{textAlign: 'center'}}>Cart</Typography>

                            {/* Lazy way */}
                            {formState.cheese === true && (
                                <Typography variant="body1" style={{textAlign: 'center'}}>Cheese</Typography>
                            )}
                            {formState.grapes === true && (
                                <Typography variant="body1" style={{textAlign: 'center'}}>Grapes</Typography>
                            )}
                            {formState.wine === true && (
                                <Typography variant="body1" style={{textAlign: 'center'}}>Wine</Typography>
                            )}
                            
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Add to cart</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={cheese} onChange={handleFormChange} name="cheese" />}
                                    label="Cheese"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={grapes} onChange={handleFormChange} name="grapes" />}
                                    label="Grapes"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={wine} onChange={handleFormChange} name="wine" />}
                                    label="Wine"
                                />
                            </FormGroup>
                            <FormHelperText>Select the items you want</FormHelperText>
                        </FormControl>
                        
                        
                    </Grid>
                </Grid>
            }/>
        </React.Fragment>
     );
}
 
export default CheckboxExample;