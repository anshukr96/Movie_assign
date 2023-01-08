/** @jsxImportSource @emotion/react */
import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';

export const Layout: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const toggleNavigation = () => setOpen((status) => !status);

	return (
		<div>
			<div>
				<Box component='header'>
					<Header />
				</Box>
				<Navigation open={open} handleClose={toggleNavigation} />
				<Box component='main' sx={{ flexGrow: 1, p: 3, pt: 10 }}>
					{children}
				</Box>
			</div>
		</div>
	);
};
