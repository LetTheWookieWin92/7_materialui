import React, { Component } from "react";

//Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OptionCard from "./optionCard";
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
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Inputs</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<Button className={classes.optionButton} variant="contained" color="primary" onClick={ () => {props.onSelection("Button")}} startIcon={<TouchApp />}>Button</Button>
					
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Button Group"} image={<GroupWork />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Checkbox"} image={<CheckBox />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Floating Action Button"} image={<TouchApp />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Date / Time"} image={<DateRange />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Radio"} image={<RadioButtonChecked />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Select"} image={<SelectAll />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Slider"} image={<Tune />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Switch"} image={<ToggleOn />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Text Field"} image={<Textsms />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Transfer List"} image={<List />} />
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Navigation</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Bottom Navigation"} image={<Navigation />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Breadcrumbs"} image={<NavigateNext />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Drawer"} image={<GetApp />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Link"} image={<Link />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Menu"} image={<Menu />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Stepper"} image={<Eject />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Tabs"} image={<Tab />} />
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Surfaces</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Card"} image={<ViewCarousel />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Accordion"} image={<ExpandMore />} />
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Feedback</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Progress"} image={<Autorenew />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Dialog"} image={<WebAsset />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Snackbar"} image={<Web />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Backdrop"} image={<Cached />} />
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Data Display</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Avatar"} image={<AccountCircle />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Badge"} image={<More />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Chip"} image={<LocalOffer />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Divider"} image={<Remove />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Material Icons"} image={<Apps />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"List"} image={<List />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Table"} image={<TableChart />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Tooltip"} image={<AccountBalanceWallet />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Typography"} image={<Spellcheck />} />
				</Grid>
			</Grid>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<h1 className="sectionText">Utils</h1>
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Click Away Listener"} image={<Hearing />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Popover"} image={<TableChart />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Textarea Autosize"} image={<Description />} />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<OptionCard text={"Transitions"} image={<Flare />} />
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
