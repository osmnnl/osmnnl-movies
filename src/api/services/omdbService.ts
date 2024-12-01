import i18next from 'i18next';
import { MovieSearchResponse, MovieDetail, SearchMoviesParams } from '../../types/omdbTypes';
import axiosInstance from '../axios/axiosInstance';
import { OMDbEndpoints } from '../url/urlHelper';

export const searchMovies = async (params: SearchMoviesParams): Promise<MovieSearchResponse> => {
	const { search, year, type, page = 1 } = params;
	const response = await axiosInstance.get(OMDbEndpoints.search, {
		params: {
			s: search,
			y: year,
			type: type,
			page: page,
		},
	});
	if (response.data.Response === "False") {
		throw new Error(response.data.Error || i18next.t('error.failedToFetchMovies'));
	}
	return response.data;
};

export const getMovieDetails = async (id: string): Promise<MovieDetail> => {
	const response = await axiosInstance.get(OMDbEndpoints.search, {
		params: { i: id },
	});
	if (response.data.Response === "False") {
		throw new Error(response.data.Error || i18next.t('error.failedToFetchMovieDetails'));
	}
	return response.data;
};
