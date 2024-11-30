// src/api/services/omdbService.ts

import { MovieSearchResponse, MovieDetail } from '../../types/omdbTypes';
import axiosInstance from '../axios/axiosInstance';
import { OMDbEndpoints } from '../url/urlHelper';

interface SearchMoviesParams {
	search: string;
	year?: string;
	type?: string;
	page?: number;
}

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
		throw new Error(response.data.Error || "Failed to fetch movies.");
	}
	return response.data;
};

export const getMovieDetails = async (id: string): Promise<MovieDetail> => {
	const response = await axiosInstance.get(OMDbEndpoints.getMovieDetails, {
		params: { i: id },
	});
	if (response.data.Response === "False") {
		throw new Error(response.data.Error || "Failed to fetch movie details.");
	}
	return response.data;
};
