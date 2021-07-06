import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
	  primary: {
		light: '#5e7597',
		main: '#314a69',
		dark: '#00233e',
		contrastText: '#ffffff',
	  },
	  secondary: {
		light: '#987d5b',
		main: '#695131',
		dark: '#3c2909',
		contrastText: '#ffffff',
	  },
	  warning:{
		light: '#ffb74d',
		main: '#ff9800',
		dark: '#f57c00',
		contrastText: '#ffffff',
	  },
	},
  });
 
export default theme;