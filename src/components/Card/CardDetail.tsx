import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { IMovie } from '../../types/movie';

interface ICardDetail {
	selectedMovie: IMovie;
}

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
	root: {
		width: '100%',
		maxHeight: 389,
		color: '#fff',
		borderRadius: spacing(2),
		transition: '0.3s',
		boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
		background: '#394B61',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingBottom: spacing(2),
		[breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingTop: spacing(2),
		},
		[breakpoints.down('md')]: {
			height: '100%',
			overflow: 'scroll',
		},
	},
	media: {
		flex: 1,
		height: 389,
	},
	content: {
		flex: 1,
	},
}));

export const CardDetail = (props: ICardDetail) => {
	const { selectedMovie } = props;
	const styles = useStyles();
	return (
		<Card className={styles.root}>
			<CardMedia className={styles.media} image={selectedMovie.Images[0]} />
			<CardContent className={styles.content}>
				<Box>
					<Typography variant='h2' sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
						{selectedMovie.Title}
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
						<BorderLinearProgress variant='determinate' color='info' value={+selectedMovie.imdbRating * 10} />
						<Typography sx={{ marginLeft: 4 }}>{selectedMovie.imdbRating}/10</Typography>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }} width={250}>
						<Box sx={{ margin: '1rem 0' }}>
							<Typography>Year:</Typography>
							<Typography>Running Time:</Typography>
							<Typography>Directed by:</Typography>
							<Typography>language:</Typography>
						</Box>
						<Box sx={{ margin: '1rem 0' }}>
							<Typography>{selectedMovie.Year}</Typography>
							<Typography>{selectedMovie.Runtime}</Typography>
							<Typography>{selectedMovie.Director}</Typography>
							<Typography>{selectedMovie.Language}</Typography>
						</Box>
					</Box>
					<Typography sx={{ fontSize: 14, margin: '1.25rem 0' }}>{selectedMovie.Plot}</Typography>

					<Box sx={{ display: 'flex' }}>
						<Button variant='contained' color='info' sx={{ padding: '0.5rem 1.5rem' }}>
							Play Movie
						</Button>
						<Button variant='outlined' color='info' sx={{ marginLeft: 4, padding: '0 1rem' }}>
							Watch Trailer
						</Button>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default CardDetail;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	backgroundColor: theme.palette.primary.main,
	width: '30%',
}));
