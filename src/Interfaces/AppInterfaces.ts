interface MovieObj {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  
  interface MoviesData {
    Search: MovieObj[];
    totalresults: string;
    Response: string;
    Error?:string
  }

  interface SelectedDetails {
    showModal: Boolean;
    data: MovieObj;
  }

  export type {MovieObj, MoviesData, SelectedDetails}