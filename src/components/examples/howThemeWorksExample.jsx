import React from 'react';

// Components
import NavigationBar from "../navigationBar";
import ExampleSection from './exampleSection';
import Grid from "@material-ui/core/Grid";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

//Style
import { makeStyles } from '@material-ui/styles';

//Img
import colorTool from './../../img/ColorTool.PNG';
import colourPicker from './../../img/ColourPicker.PNG';
import themeComponent from './../../img/ThemeComponent.PNG';
import ThemeProvider from './../../img/ThemeProvider.PNG';
import CustomThemeStyles from './../../img/CustomThemeStyles.png';
import TypographyImg from './../../img/Typography.PNG';
import TypographyImplement from './../../img/TypographyImplement.PNG';
import TypographyOutcome from './../../img/TypographyOutcome.PNG';

const useStyles = makeStyles(theme => ({
    imgFitting: {
        alignSelf: "center",
        maxWidth: "calc(100% - 20px)",
        margin: 10,
    }
}));

const HowThemeWorksExample = ({title, onBackPress}) => {
    const classes = useStyles();
    return ( 
        <React.Fragment>
            
            <NavigationBar textLabel={title} showBack="Yes" backPressed={onBackPress}/>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h5">Implementing a colour palette</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#f5f5f6"}}>
                    <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <ExampleSection title="1. Decide on your colour palette" description="Use the Material Design colour picker to select your primary and secondary colours, then use the color tool to preview and check accessibility." content=
                                {
                                    <Grid container spacing={0} alignItems="center">
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                            <img src={colourPicker} className={classes.imgFitting} alt="Content Missing"/>
                                            <Typography variant="body2" style={{textAlign: 'center'}}>Colour picker</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                            <img src={colorTool} className={classes.imgFitting} alt="Content Missing"/>
                                            <Typography variant="body2" style={{textAlign: 'center'}}>Color tool</Typography>
                                        </Grid>
                                    </Grid>
                                }/>
                            <ExampleSection title="2. Create the theme component" description="Using the colour palette you decided in step 1, create a new theme.jsx component." content=
                            {
                                <Grid container spacing={0} >
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center">
                                        <img src={themeComponent} className={classes.imgFitting} alt="Content Missing"/>
                                        <Typography variant="body2" style={{textAlign: 'center'}}>theme.jsx</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Typography variant="body1">You can define primary, secondary, error, warning, info and success palette colours. Each has main, light, dark and contrastText values but if you omit light, dark and contrastText then these will be calculated from the main value.</Typography>
                                        <Typography variant="body1">Some components, such as Button, can't access all of the defined palette colours. In that case, you should define a custom style and set the properties equal to those defined in the theme colour palette (see step 4).</Typography>
                                        <Typography variant="body1">Import the theme component wherever you intend to implement the ThemeProvider (see step 3).</Typography>
                                    </Grid>
                                </Grid>
                            }/>
                            <ExampleSection title="3. Implement the ThemeProvider" description="ThemeProvider is what you use to inject the theme into your application." content=
                            {
                                <Grid container spacing={0} >
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center">
                                        <img src={ThemeProvider} className={classes.imgFitting} alt="Content Missing"/>
                                        <Typography variant="body2" style={{textAlign: 'center'}}>ThemeProvider tag</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Typography variant="body1">To add the theme to your app, wrap the top-level element of the app in the ThemeProvider tags. If you've imported the theme component from step 2, your theme should now flow down through the rest of your component tree.</Typography>
                                        
                                    </Grid>
                                </Grid>
                            }/>
                            <ExampleSection title="4. Apply custom styles" description="Custom styles can be added to functional components using the makeStyles hook." content=
                            {
                                <Grid container spacing={0} >
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center">
                                        <img src={CustomThemeStyles} className={classes.imgFitting} alt="Content Missing"/>
                                        <Typography variant="body2" style={{textAlign: 'center'}}>Applying custom styles using makeStyles hook</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Typography variant="body1">You might need to add custom styles to a certain component, or apply the existing palette to components that can't access them.</Typography>
                                        <Typography variant="body1">Import the makeStyles hook and create the style you need. In the example here, we had already defined the warning palette and we're just linking to it.</Typography>
                                        <Typography variant="body1">Implement the custom style by creating an instance of the makeStyles method and accessing the style under className.</Typography>
                                        
                                    </Grid>
                                </Grid>
                            }/>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h5">Typography</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#f5f5f6"}}>
                    <Grid container spacing={0} alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <ExampleSection title="1. Decide on your font variants" description="Pick a font family, and modify the variants in the theme.jsx. Responsive font sizes automate the sizing of variants at each breakpoint, in line with defined rem units. Variants will scale more or less depending on the rem unit. " content=
                                {
                                    <Grid container spacing={0} alignItems="center">
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <img src={TypographyImg} className={classes.imgFitting} alt="Content Missing"/>
                                            <Typography variant="body2" style={{textAlign: 'center'}}>Setting variants in theme.jsx</Typography>
                                        </Grid>
                                    </Grid>
                                }/>
                                <ExampleSection title="2. Implement using the typography tags" description="Use the typography tags throughout your app to apply a consistent theme throughout." content=
                                {
                                    <Grid container spacing={0} alignItems="center">
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center">
                                            <img src={TypographyImplement} className={classes.imgFitting} alt="Content Missing"/>
                                            <Typography variant="body2" style={{textAlign: 'center'}}>Adding the tags within the app</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center">
                                            <img src={TypographyOutcome} className={classes.imgFitting} alt="Content Missing"/>
                                            <Typography variant="body2" style={{textAlign: 'center'}}>Outcome</Typography>
                                        </Grid>
                                    </Grid>
                                }/>
                            </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h5">Spacing</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#f5f5f6"}}>

                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h5">Breakpoints</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#f5f5f6"}}>

                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h5">Density</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#f5f5f6"}}>

                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h5">z-index</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#f5f5f6"}}>

                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h5">Globals</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#f5f5f6"}}>

                </AccordionDetails>
            </Accordion>
            
        </React.Fragment>
     );
}
 
export default HowThemeWorksExample;