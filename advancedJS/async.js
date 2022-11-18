const fs = require("fs/promises");

// function readFile() {
//   let fileData;
//   //Callback
//   //   fs.readFile("data.txt", function (error, fileData) {
//   // if (error) {
//   //     //...
//   // }
//   //     console.log("File parsing done!");
//   //     console.log(fileData.toString());
//   //     //start another async tast that sends the data to a database
//   //   });

//   //Promise
//   fs.readFile("data.txt")
//     .then(function (fileData) {
//       console.log("File parsing done!");
//       console.log(fileData.toString());
//       //return anotherAsyncOperation
//     })
//     .then(function () {})
//     .catch(function (error) {}); //오류 처리

//   console.log("Hi there!");
// }

// readFile();

async function readFile() {
  let fileData;
  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }

  console.log("File parsing done!");
  console.log(fileData.toString());
  //return anotherAsyncOperation
  console.log("Hi there!");
}

readFile();
