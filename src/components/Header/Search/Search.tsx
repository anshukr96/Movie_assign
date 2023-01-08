import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase, styled, useTheme } from '@mui/material';
import Slide from '@mui/material/Slide';
import { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from '../../../hooks/useDebouncer';

export const Search = ({ onClose, onMovieSearch }: any) => {
	const theme = useTheme();
	const [input, setInput] = useState('');
	const [checked, setChecked] = useState(false);
	const debouncedValue = useDebounce<string>(input, 500);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	useEffect(() => {
		onMovieSearch(debouncedValue);
		setChecked(true);
	}, [debouncedValue]);

	const onCloseSearch = () => {
		setChecked(false);
		onClose();
	};

	return (
		<Slide direction='right' in={checked} mountOnEnter unmountOnExit>
			<Box
				sx={{
					display: { xs: 'none', sm: 'flex' },
					backgroundColor: theme.palette.primary.main,
					justifyContent: 'space-between',
					borderRadius: 2,
					alignItems: 'center',
					padding: '0 0.5rem',
				}}>
				<SearchWrapper>
					<SearchIconWrapper>
						<SearchIcon sx={{ height: 20, width: 20, color: '#fff' }} />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder='Title, Movies, Keyword'
						inputProps={{ 'aria-label': 'search' }}
						value={input}
						onChange={handleChange}
					/>
				</SearchWrapper>
				<Box onClick={onCloseSearch} sx={{ cursor: 'pointer' }}>
					<CloseIcon sx={{ height: 20, width: 20, color: '#fff' }} />
				</Box>
			</Box>
		</Slide>
	);
};

const SearchWrapper = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: 8,
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));
