import { useQuery } from 'react-query';
import { searchMovies, getMovieDetails } from '../../api/services/omdbService';
import { MovieSearchResponse, MovieDetail, SearchMoviesParams } from '../../types/omdbTypes';

export const useSearchMovies = (params: SearchMoviesParams) =>
	useQuery<MovieSearchResponse, Error>(
		['searchMovies', params],
		() => searchMovies(params),
		{
			enabled: !!params.search,
			retry: false, 
		}
	);

export const useMovieDetails = (id: string) =>
	useQuery<MovieDetail>(['movieDetails', id], () => getMovieDetails(id), {
		enabled: !!id,
	});
