/*

Tempus Time

Welcome to planet Tempus, we're a species a lot like you but we evolved to develop a language has no digits :( [0 - 9]

We write our dates using purely characters, the way we do it is by taking the day of the week and using the first and last letters of the word, we represent the day and month.

Implement a dateMaker() function to take a given array of days and a date to return a string in Tempus Time so that we can understand the day of the month.

["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]


*/

const dateMaker = (days: string[], date: Date): string => {
  return (
    days[date.getDay()].charAt(0).repeat(date.getDate()) +
    days[date.getDay()].substring(1, days[date.getDay()].length - 1) +
    days[date.getDay()]
      .charAt(days[date.getDay()].length - 1)
      .repeat(date.getMonth() + 1)
  );
};

console.log(
  dateMaker(
    [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ],
    new Date()
  )
);
