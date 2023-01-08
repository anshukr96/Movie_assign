/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { APP_TITLE } from '../../../utils/constants';

export const AppTitle = () => (
	<NavLink to='/'>
		<Typography variant='h6' noWrap>
			{APP_TITLE}
		</Typography>
	</NavLink>
);
