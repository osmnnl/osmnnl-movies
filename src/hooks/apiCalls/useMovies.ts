import { useQuery } from 'react-query';
import { searchMovies, getMovieDetails } from '../../api/services/omdbService';
import { MovieSearchResponse, MovieDetail } from '../../types/omdbTypes';

interface SearchMoviesParams {
	search: string;
	year?: string;
	type?: string;
	page?: number;
}

export const useSearchMovies = (params: SearchMoviesParams) =>
	useQuery<MovieSearchResponse>(
		['searchMovies', params],
		() => searchMovies(params),
		{
			enabled: !!params.search,
		}
	);

export const useMovieDetails = (id: string) =>
	useQuery<MovieDetail>(['movieDetails', id], () => getMovieDetails(id), {
		enabled: !!id,
	});
