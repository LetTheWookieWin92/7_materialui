import React from "react";
import NavigationBar from "../navigationBar";
import ExampleSection from "./exampleSection";
import { Grid, Button, ButtonGroup } from "@material-ui/core";

const ButtonGroupExample = ({ title, onBackPress }) => {
	return (
		<React.Fragment>
			<NavigationBar
				textLabel={title}
				showBack="Yes"
				backPressed={onBackPress}
			/>
			<Grid container spacing={0} alignItems="center">
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<ExampleSection
						title="Variants"
						description="As with regular buttons, button groups have primary, outlined and text variants."
						content={
							<Grid container spacing={1} alignItems="center">
								<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
									<ButtonGroup
										color="primary"
										aria-label="outlined primary button group"
									>
										<Button>One</Button>
										<Button>Two</Button>
										<Button>Three</Button>
									</ButtonGroup>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
									<ButtonGroup
										variant="contained"
										color="primary"
										aria-label="contained primary button group"
									>
										<Button>One</Button>
										<Button>Two</Button>
										<Button>Three</Button>
									</ButtonGroup>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
									<ButtonGroup
										variant="text"
										color="primary"
										aria-label="text primary button group"
									>
										<Button>One</Button>
										<Button>Two</Button>
										<Button>Three</Button>
									</ButtonGroup>
								</Grid>
							</Grid>
						}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default ButtonGroupExample;
