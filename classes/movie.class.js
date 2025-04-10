export class Movie {
  #rating;

  constructor(
    title,
    genre,
    duration,
    releaseDate,
    availableTickets,
    rating = 0
  ) {
    this.title = title;
    this.genre = genre;
    this.duration = duration;
    this.releaseDate = new Date(releaseDate);
    this.availableTickets = availableTickets;
    this.#rating = rating;
  }

  isAvailable() {
    const today = new Date();
    return today >= this.releaseDate;
  }

  getRating() {
    return this.#rating;
  }

  setRating(value) {
    if (value >= 0 && value <= 10) {
      this.#rating = value;
    } else {
      console.log("Reyting 0-10 arasinda olmalidir.");
    }
  }

  reduceTickets(quantity) {
    if (this.availableTickets >= quantity) {
      this.availableTickets -= quantity;
    } else {
      console.log("Bilet yoxdur.");
    }
  }

  increaseTickets(quantity) {
    this.availableTickets += quantity;
  }
}
