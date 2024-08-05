function fetchData(callback) {
  setTimeout(() => {
    const data = "some data";
    callback(data);
  }, 3000);
}

console.log("It will take 3 seconds - 3000 - to print the data in the console");
fetchData((data) => {
  console.log(data); // "some data"
});
