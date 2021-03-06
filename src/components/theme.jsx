import { createMuiTheme , responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
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
	typography: {
		fontFamily: 'sans-serif',
		h1: {
			fontSize: 35,
			marginTop: 10,
			marginLeft: 20,
  			marginRight: 20,
			marginBottom: 10,
			fontWeight: 'bold',
		},
		h2: {
			fontSize: 30,
			marginTop: 10,
			marginLeft: 25,
  			marginRight: 20,
			marginBottom: 10,
			fontWeight: 'bold',
		},
		h3: {
			fontSize: 25,
			marginTop: 10,
			marginLeft: 25,
  			marginRight: 20,
			marginBottom: 10,
		},
		h4: {
			fontSize: 20,
			marginTop: 10,
			marginLeft: 25,
  			marginRight: 20,
			marginBottom: 10,
		},
		h5: {
			fontSize: 18,
			marginTop: 10,
			marginLeft: 25,
  			marginRight: 20,
			marginBottom: 10,
		},
		// Nav bar titles only
		h6: {
			fontSize: 20,
		},
		// Normal paragraph text
		body1: {
			fontSize: 14,
			marginTop: 15,
			marginLeft: 30,
  			marginRight: 30,
			marginBottom: 15,
			textAlign: 'left',
		},
		// Labels with no padding and lighter shade
		body2: {
			fontSize: 14,
			marginTop: 0,
			marginLeft: 30,
  			marginRight: 30,
			marginBottom: 0,
			textAlign: 'left',
			color: '#9c9c9c'
		},
	}
  });

  theme = responsiveFontSizes(theme);
 
export default theme;