const hobbies = ["sports", "cooking"]; //a pointer to the array is stored

hobbies.push("reading"); // the address of the array doesn't change - constant

// hobbies = ["coding", "sleeping"]; //not allowed! new address is stored

console.log(hobbies);

const person = { age: 32 };

function getAdultYears(p) {
  //   p.age -= 18;
  //   return p.age;
  return p.age - 18;
}

console.log(getAdultYears({ ...person })); //object 복사, 원래 객체 변경 x, 새로운 객체 생성
console.log(person);
