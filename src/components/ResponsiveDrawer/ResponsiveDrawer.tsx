import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ListIcon from '@mui/icons-material/List';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LogoutIcon from '@mui/icons-material/Logout';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import TvIcon from '@mui/icons-material/Tv';
import WatchLaterBorderIcon from '@mui/icons-material/WatchLater';
import { Typography } from '@mui/material';
import Slide from '@mui/material/Slide';

import { useMediaQuery } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/system';
import * as React from 'react';
import { MOVIE_DATA } from '../../data/movie';
import { IMovie } from '../../types/movie';
import CardWrapper from '../Card/Card';
import CardDetail from '../Card/CardDetail';
import DividerWrapper from '../Divider/Divider';
import { Header } from '../Header';

const drawerWidth = 275;

export const navItems = [
	{ name: 'Discovery', icon: <SearchIcon sx={{ color: 'info.main' }} /> },
	{ name: 'Playlist', icon: <PlaylistPlayIcon sx={{ color: '#fff' }} /> },
	{ name: 'Movie', icon: <LiveTvIcon sx={{ color: '#fff' }} /> },
	{ name: 'TV Shows', icon: <TvIcon sx={{ color: '#fff' }} /> },
	{ name: 'My List', icon: <ListIcon sx={{ color: '#fff' }} /> },
	{ name: 'Watch Later', icon: <WatchLaterBorderIcon sx={{ color: '#fff' }} /> },
	{ name: 'Recommended', icon: <FavoriteBorderIcon sx={{ color: '#fff' }} /> },
	{ name: 'Settings', icon: <SettingsIcon sx={{ color: '#fff' }} /> },
	{ name: 'Logout', icon: <LogoutIcon sx={{ color: '#fff' }} /> },
];

export const ResponsiveDrawer = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [movieList, setMovieList] = React.useState(MOVIE_DATA);
	const [selectedMovie, setSelectedMovie] = React.useState(MOVIE_DATA[0]);
	const [isSelected, setIsSelected] = React.useState(false);
	const [isSearch, setIsSearch] = React.useState(false);
	const [checked, setChecked] = React.useState(false);
	const isSmallScreen = useMediaQuery('(max-width: 600px)');

	const handleChange = (movie: IMovie) => {
		setSelectedMovie(movie);
		setIsSelected(true);
		setChecked(true);
	};
	const theme = useTheme();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Toolbar />
			<Box sx={{ textAlign: 'center' }}>
				<Box
					component='img'
					sx={{
						height: 91,
						width: 91,
						borderRadius: '50%',
					}}
					alt='avatar'
					src='/images/logo.png'
				/>
				<Typography variant='h5' sx={{ color: '#fff' }}>
					Eric Hoffman
				</Typography>
			</Box>

			<DividerWrapper />
			<List sx={{ width: '100%' }}>
				{navItems.map((text, index) => (
					<Box
						sx={{
							width: '100%',
							textAlign: 'center',
							borderRight: index === 0 ? 4 : 0,
							borderColor: 'info.main',
							color: index === 0 ? 'info.main' : '#fff',
						}}
						key={text.name}>
						<ListItem key={text.name}>
							<ListItemButton color='primary'>
								<ListItemIcon>{text.icon}</ListItemIcon>
								<ListItemText primary={text.name} />
							</ListItemButton>
						</ListItem>
						{index === 4 || index === 6 ? <DividerWrapper /> : null}
					</Box>
				))}
			</List>
		</Box>
	);

	const onMovieSearch = (name: string) => {
		let filteredList = [...movieList];
		if (name !== '') {
			filteredList = filteredList.filter((list) => list.Title.toLowerCase().includes(name));
			setMovieList(filteredList);
		} else {
			setMovieList(MOVIE_DATA);
		}
		setIsSelected(false);
	};

	const renderNoMatch = () => {
		return <Typography>No results found for your search.</Typography>;
	};

	return (
		<Box
			sx={{
				display: 'flex',
				backgroundColor: theme.palette.primary.light,
				color: '#fff',
			}}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					height: 0,
				}}>
				<Toolbar>
					<IconButton
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' }, color: '#fff' }}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
				<Drawer
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							backgroundColor: theme.palette.primary.main,
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							backgroundColor: theme.palette.primary.main,
							boxSizing: 'border-box',
							width: drawerWidth,
							color: '#fff',
						},
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Box component='main' sx={{ flexGrow: 1, p: 3, minHeight: '100vh' }}>
				{!isSmallScreen ? (
					<Header isSearch={isSearch} onSearch={() => setIsSearch((search) => !search)} onMovieSearch={onMovieSearch} />
				) : null}

				{isSmallScreen ? <Toolbar /> : null}
				{isSelected ? (
					<Slide direction='up' in={checked} mountOnEnter unmountOnExit>
						<Box sx={{ margin: { sm: '1rem 4rem 1rem 1rem', xs: '1rem' } }}>
							<CardDetail selectedMovie={selectedMovie} />
						</Box>
					</Slide>
				) : null}
				<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
					{movieList.length
						? movieList.map((movie: IMovie, idx) => {
								return (
									<CardWrapper
										key={idx}
										movie={movie}
										onClick={() => handleChange(movie)}
										selectedCard={selectedMovie}
									/>
								);
						  })
						: renderNoMatch()}
				</Box>
			</Box>
		</Box>
	);
};
