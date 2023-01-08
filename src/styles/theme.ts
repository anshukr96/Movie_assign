import { createTheme, responsiveFontSizes } from '@mui/material';

export const getAppTheme = () => {
	let theme = createTheme({
		palette: {
			primary: {
				main: '#1F2A3C',
			},
			secondary: {
				main: '#394B61',
			},
		},
	});
	theme = responsiveFontSizes(theme);
	return theme;
};
