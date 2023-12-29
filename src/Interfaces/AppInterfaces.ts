interface MovieObj {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MoviesData {
  Search: MovieObj[];
  totalResults: string;
  Response: string;
  Error?: string;
}

interface MovieDetails extends MovieObj {
  Plot: string;
  Response: string;
  Error?: string;
}

interface SelectedDetails {
  showModal: Boolean;
  data: MovieObj;
}

interface responseData {
  data: MoviesData;
  response: string;
}

interface responseDetails {
  data: MovieDetails;
}

export type {
  MovieObj,
  MoviesData,
  SelectedDetails,
  responseData,
  MovieDetails,
  responseDetails,
};
