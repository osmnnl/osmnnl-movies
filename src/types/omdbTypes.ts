export interface Movie {
	Title: string;
	Year: string;
	imdbID: string;
	Type: string;
	Poster: string;
}

export interface MovieSearchResponse {
	Search: Movie[];
	totalResults: string;
	Response: string;
	Error?: string;
}

export interface MovieDetail {
	Title: string;
	Year: string;
	Rated: string;
	Released: string;
	Runtime: string;
	Genre: string;
	Director: string;
	Writer: string;
	Actors: string;
	Plot: string;
	Language: string;
	Country: string;
	Awards: string;
	Poster: string;
	imdbRating: string;
	imdbVotes: string;
	imdbID: string;
	Type: string;
	Response: string;
	Error?: string;
}


export interface SearchMoviesParams {
	search: string;
	year?: string;
	type?: string;
	page?: number;
}