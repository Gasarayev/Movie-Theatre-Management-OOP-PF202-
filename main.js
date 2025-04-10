import { Movie } from "./classes/movie.class.js"; 
import { Theatre } from "./classes/theatre.class.js";
import { Client } from "./classes/client.class.js";
import { Admin } from "./classes/admin.class.js"; 


const cinemaCity = new Theatre("Cinema City", "Baku");


const inception = new Movie("Inception", "Sci-Fi", 148, "2010-07-16", 100, 4);
const titanic = new Movie("Titanic", "Romance", 195, "1997-12-19", 80, 8);
const batman = new Movie("The Batman", "Action", 176, "2022-03-04", 60, 12);
inception.setRating(9);
inception.setRating(11);

cinemaCity.addMovie(inception);
cinemaCity.addMovie(titanic);
cinemaCity.addMovie(batman);

console.log("Filmler",cinemaCity)

const ali = new Client("Ali", 25);
ali.buyTicket(inception, 2);
ali.buyTicket(titanic, 1);
console.log("Alinin biletləri:", ali.listTickets());


const admin = new Admin("Admin", 30);
const newMovie = new Movie("Interstellar", "Sci-Fi", 169, "2014-11-07", 50, 22);
admin.addMovieToTheatre(cinemaCity, newMovie);

admin.removeMovieFromTheatre(cinemaCity, "Titanic");


console.log("Teatrdakı filmlər:");
cinemaCity.showAllMovies().forEach(movie => {
  console.log(`${movie.title} (${movie.genre}) - Mövcud bilet: ${movie.availableTickets}`);
});
