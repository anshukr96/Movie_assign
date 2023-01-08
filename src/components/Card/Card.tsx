import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Box, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { IMovie } from '../../types/movie';

interface ICardProps {
	movie: IMovie;
	onClick: () => void;
	selectedCard: IMovie;
}

const useStyles = makeStyles((theme) => ({
	card: {
		borderRadius: 11,
		backgroundColor: theme.palette.secondary.main,
		color: '#fff',
		padding: '0.7rem',
		margin: theme.spacing(2, 3),
		width: '20%',
		cursor: 'pointer',
		[theme.breakpoints.down('lg')]: {
			width: '25%',
		},
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
		'& .MuiPaper-root': {
			backgroundColor: '#394B61',
		},
	},
}));

export default function CardWrapper(props: ICardProps) {
	const { movie, onClick, selectedCard } = props;
	const styles = useStyles();

	return (
		<Box
			className={styles.card}
			onClick={onClick}
			sx={{ border: selectedCard.Title === movie.Title ? '3px solid #00E0FF' : '3px solid #1F2A3C' }}>
			<CardMedia sx={{ height: 188 }} image={movie.Images[0]} title='movie image' />
			<CardContent>
				<Typography gutterBottom variant='h6' sx={{ overflow: 'auto' }}>
					{movie.Title}
				</Typography>
			</CardContent>
			<CardActions>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
					<IconButton aria-label='play/pause'>
						<PlayCircleOutlineIcon sx={{ height: 28, width: 28, color: '#fff' }} />
					</IconButton>
					<IconButton aria-label='add'>
						<AddCircleOutlineIcon sx={{ height: 28, width: 28, color: '#fff' }} />
					</IconButton>
				</Box>
			</CardActions>
		</Box>
	);
}
