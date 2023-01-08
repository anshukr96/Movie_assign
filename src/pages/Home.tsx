/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';

export const Home = () => {
	const context = useContext(AppContext);

	return (
		<>
			<Helmet>
				<title>
					{PAGE_TITLE_HOME} | {APP_TITLE}
				</title>
			</Helmet>
			<Typography variant='h4'>{`Hello, ${context.user.name}`}</Typography>
		</>
	);
};
