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

  export type {MovieObj, MoviesData}