export class Theatre {
    constructor(name, location) {
      this.name = name;
      this.location = location;
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    removeMovie(title) {
      this.movies = this.movies.filter(movie => movie.title !== title);
    }
  
    getMoviesByGenre(genre) {
      return this.movies.filter(movie => movie.genre === genre);
    }
  
    showAllMovies() {
      return this.movies;
    }
  }