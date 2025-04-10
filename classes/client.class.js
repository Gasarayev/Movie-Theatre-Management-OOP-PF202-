export class Client {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.tickets = [];
    }
  
    buyTicket(movie, quantity) {
      if (movie.availableTickets >= quantity) {
        movie.reduceTickets(quantity);
        this.tickets.push({ movie: movie.title, quantity });
        console.log(`${this.name} ${quantity} bilet aldi: ${movie.title}`);
      } else {
        console.log("Bilet yoxdur.");
      }
    }
  
    listTickets() {
      return this.tickets;
    }
  }