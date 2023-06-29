// Challenge 1

let now = new Date();
console.log(now);

// Challenge 2

console.log(now.getMilliseconds());

// Challenge 3

console.log(now.getDay());

// Challenge 4

console.log(now.getFullYear());

// Challenge 5

console.log(now.getMonth());

// Challenge 6

let days = ["Sun", "Mon", "Tue", "Wen", "The", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Des"
];
let month = months[now.getMonth()];

let date = now.getDate();
let year = now.getFullYear();

console.log(`Today is ${day}, ${month}${date}, ${year}`);

// Challenge 7

function formatDate(date) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let day = weekdays[date.getDay()];
  let month = months[date.getMonth()];
  let dates = date.getDate();
  let year = date.getFullYear();
  let dateSentense = `${day}, ${month} ${dates}, ${year}`;
  return dateSentense;
}

console.log(formatDate(new Date()));
