function greetUser(greetingPrefix, userName = "user") {
  // console.log(greetingPrefix + " " + userName + "!");
  console.log(`${greetingPrefix} ${userName}!`);
}

greetUser("Hi", "Max");
greetUser("Hello");

///...=> 나머지 매개변수 기능
function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number; // result = result + number
  }
  return result;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];

console.log(sumUp(...inputNumbers));

console.log(sumUp);
