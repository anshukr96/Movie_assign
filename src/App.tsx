import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppClient } from './clients';
import { PageDefault } from './components/PageDefault';
import { routes } from './config';
import { AppContext } from './contexts';
import { Route as AppRoute } from './types';

function App() {
	const appClient = new AppClient();

	const theme = createTheme({
		palette: {
			primary: {
				main: '#1F2A3C',
				light: '#273244',
			},
			secondary: {
				main: '#394B61',
			},
			info: {
				main: '#00E0FF',
			},
		},
		typography: {
			h6: {
				fontSize: 16,
			},
			h5: {
				fontSize: 20,
			},
			h2: {
				fontSize: 30,
			},
		},
	});

	const addRoute = (route: AppRoute) => (
		<Route key={route.key} path={route.path} component={route.component || PageDefault} exact />
	);

	return (
		<AppContext.Provider value={appClient}>
			<MuiThemeProvider theme={theme}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Router>
						<Switch>
							{routes.map((route: AppRoute) =>
								route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
							)}
						</Switch>
					</Router>
				</ThemeProvider>
			</MuiThemeProvider>
		</AppContext.Provider>
	);
}

export default App;
