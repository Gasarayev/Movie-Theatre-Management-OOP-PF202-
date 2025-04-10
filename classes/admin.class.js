import { Client } from "./client.class.js";

export class Admin extends Client {
  constructor(name, age) {
    super(name, age);
  }

  addMovieToTheatre(theatre, movie) {
    theatre.addMovie(movie);
    console.log(`Admin ${movie.title} filmi elave etdi.`);
  }

  removeMovieFromTheatre(theatre, title) {
    theatre.removeMovie(title);
    console.log(`Admin ${title} filmi sildi.`);
  }
}