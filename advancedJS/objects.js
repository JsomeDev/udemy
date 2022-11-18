// const job = {
//   title: "developer",
//   location: "new york",
//   salary: 50000,
// };

const { deepEqual } = require("assert");

// console.log(new Date().toISOString());

// const job2 = {
//   title: "cook",
//   location: "munich",
//   salary: 50000,
// };

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
    );
  }
}

const developer = new Job("Developer", "New York", 50000);
const cook = new Job("cook", "munich", 50000);

console.log(developer);

developer.describe();
cook.describe();
