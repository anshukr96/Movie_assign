import LightModeIcon from '@mui/icons-material/LightMode';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton } from '@mui/material';
import { Search } from './Search';

export const Header = ({ isSearch = false, onSearch, onMovieSearch }: any) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '3rem 1.5rem' }}>
			<Box sx={{ width: { xs: 0, md: '50%' } }}>
				{isSearch ? (
					<Search onClose={onSearch} onMovieSearch={onMovieSearch} />
				) : (
					<SearchButton onSearchClick={onSearch} />
				)}
			</Box>

			<Box>
				<IconButton aria-label='add'>
					<LightModeIcon sx={{ height: 28, width: 28, color: '#fff' }} />
				</IconButton>
				<IconButton aria-label='add'>
					<MoreVertIcon sx={{ height: 28, width: 28, color: '#fff' }} />
				</IconButton>
			</Box>
		</Box>
	);
};

export const SearchButton = ({ onSearchClick }: any) => {
	return (
		<Box onClick={onSearchClick} sx={{ cursor: 'pointer' }}>
			<SearchIcon sx={{ height: 25, width: 25, color: '#fff' }} />
		</Box>
	);
};
