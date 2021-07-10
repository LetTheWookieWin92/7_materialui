import React from "react";

//Components
import NavigationBar from "./navigationBar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

//Style
import "../style/home.css";

//Icons
import {
	TouchApp,
	Web,
	TableChart,
	Flare,
	Hearing,
	Description,
	Spellcheck,
	AccountBalanceWallet,
	More,
	LocalOffer,
	Apps,
	Remove,
	AccountCircle,
	Cached,
	WebAsset,
	Autorenew,
	NavigateNext,
	ExpandMore,
	ViewCarousel,
	Eject,
	Tab,
	Menu,
	Link,
	GetApp,
	GroupWork,
	CheckBox,
	Navigation,
	RadioButtonChecked,
	DateRange,
	SelectAll,
	Tune,
	ToggleOn,
	Textsms,
	List,
	Style,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	optionButton: {
		margin: 10,
        padding: 5,
        width: "calc(100% - 20px)",
        height: "calc(100% - 20px)",
        textAlign: "center",
        overflow: "hidden"
	}
}));

export default function Home(props) {
	const classes = useStyles();
	

	return (
		
		<React.Fragment>
			<NavigationBar textLabel="MaterialUI" showBack="No"/>
			<Grid container spacing={0} style={{maxWidth: 1920}}>
				<Grid item xs={12}>
					<h1 className="sectionText">Theming</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("How theme works")}} startIcon={<Style />}>How theme works</Button>
				</Grid>
			</Grid>
			<Grid container spacing={0} style={{maxWidth: 1920}}>
				<Grid item xs={12}>
					<h1 className="sectionText">Inputs</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Button")}} startIcon={<TouchApp />}>Button</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Button Group")}} startIcon={<GroupWork />}>Button Group</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Checkbox")}} startIcon={<CheckBox />}>Checkbox</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Floating Action Button")}} startIcon={<TouchApp />}>Floating Action Button</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Date / Time")}} startIcon={<DateRange />}>Date / Time</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Radio")}} startIcon={<RadioButtonChecked />}>Radio</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Select")}} startIcon={<SelectAll />}>Select</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Slider")}} startIcon={<Tune />}>Slider</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Switch")}} startIcon={<ToggleOn />}>Switch</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Text Field")}} startIcon={<Textsms />}>Text Field</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Transfer List")}} startIcon={<List />}>Transfer List</Button>
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Navigation</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Bottom Navigation")}} startIcon={<Navigation />}>Bottom Navigation</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Breadcrumbs")}} startIcon={<NavigateNext />}>Breadcrumbs</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Drawer")}} startIcon={<GetApp />}>Drawer</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Link")}} startIcon={<Link />}>Link</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Menu")}} startIcon={<Menu />}>Menu</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Stepper")}} startIcon={<Eject />}>Stepper</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Tabs")}} startIcon={<Tab />}>Tabs</Button>
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Surfaces</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Card")}} startIcon={<ViewCarousel />}>Card</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Accordion")}} startIcon={<ExpandMore />}>Accordion</Button>
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Feedback</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Progress")}} startIcon={<Autorenew />}>Progress</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Dialog")}} startIcon={<WebAsset />}>Dialog</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Snackbar")}} startIcon={<Web />}>Snackbar</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Backdrop")}} startIcon={<Cached />}>Backdrop</Button>
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Data Display</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Avatar")}} startIcon={<AccountCircle />}>Avatar</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Badge")}} startIcon={<More />}>Badge</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Chip")}} startIcon={<LocalOffer />}>Chip</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Divider")}} startIcon={<Remove />}>Divider</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Material Icons")}} startIcon={<Apps />}>Material Icons</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("List")}} startIcon={<List />}>List</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Table")}} startIcon={<TableChart />}>Table</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Tooltip")}} startIcon={<AccountBalanceWallet />}>Tooltip</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Typography")}} startIcon={<Spellcheck />}>Typography</Button>
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Utils</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Click Away Listener")}} startIcon={<Hearing />}>Click Away Listener</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Popover")}} startIcon={<TableChart />}>Popover</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Textarea Autosize")}} startIcon={<Description />}>Textarea Autosize</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="secondary" onClick={ () => {props.onSelection("Transitions")}} startIcon={<Flare />}>Transitions</Button>
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Lab</h1>
					<p className="sectionText">To be added...</p>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
