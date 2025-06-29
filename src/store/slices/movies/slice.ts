import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MovieState {
  allMovies: IMovie[];
  movies: IMovie[];
}

// Define the initial state using that type
const initialState: MovieState = {
  allMovies: [],
  movies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,

  reducers: {
    filterMoviesByTitle(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      state.movies = state.allMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm),
      );
    },
  },
});
export default movieSlice;
