// Filename: complexCode.js

/* 
   This complex code is designed to simulate a flight booking system. It utilizes various advanced concepts and techniques of JavaScript 
   to handle flights, customers, and bookings. The code focuses on demonstrating modular architecture, object-oriented programming, 
   error handling, and data manipulation.  
*/

// Flight class represents a flight with various properties and methods
class Flight {
  constructor(plane, departure, destination, seats) {
    this.plane = plane;
    this.departure = departure;
    this.destination = destination;
    this.seats = seats;
  }

  isFullyBooked() {
    return this.seats === 0;
  }

  bookSeat() {
    if (this.isFullyBooked()) {
      throw new Error('No available seats on this flight.');
    }
    this.seats--;
  }
}

// Customer class represents a customer with a name, email, and booking history
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.bookings = [];
  }

  bookFlight(flight) {
    try {
      flight.bookSeat();
      this.bookings.push(flight);
      console.log('Reservation success!');
    } catch (error) {
      console.log(`Reservation failed: ${error.message}`);
    }
  }
}

// FlightBookingSystem class handles flights and customers, and performs booking operations
class FlightBookingSystem {
  constructor() {
    this.flights = [];
    this.customers = [];
  }

  addFlight(flight) {
    this.flights.push(flight);
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  searchFlight(departure, destination) {
    return this.flights.filter(flight => 
      flight.departure === departure && flight.destination === destination);
  }
}

// Usage example
const bookingSystem = new FlightBookingSystem();

const flight1 = new Flight('A380', 'New York', 'London', 100);
const flight2 = new Flight('B737', 'Paris', 'Rome', 200);
const flight3 = new Flight('A320', 'London', 'Paris', 50);

bookingSystem.addFlight(flight1);
bookingSystem.addFlight(flight2);
bookingSystem.addFlight(flight3);

const customer1 = new Customer('John Doe', 'john.doe@example.com');
const customer2 = new Customer('Jane Smith', 'jane.smith@example.com');

bookingSystem.addCustomer(customer1);
bookingSystem.addCustomer(customer2);

const availableFlights = bookingSystem.searchFlight('New York', 'London');

if (availableFlights.length > 0) {
  customer1.bookFlight(availableFlights[0]);
} else {
  console.log('No available flights.');
}
 
customer2.bookFlight(flight1);
customer2.bookFlight(flight2);

console.log(customer1.bookings);
console.log(customer2.bookings);
