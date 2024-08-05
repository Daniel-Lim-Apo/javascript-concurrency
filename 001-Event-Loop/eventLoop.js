console.log("\nSee the README.md for more information\n");
console.log("Start");

// Synchronous operation
console.log("Synchronous Log");

// Asynchronous operation with setTimeout
setTimeout(() => {
  console.log("Timeout Log");
}, 0);

// Promise to demonstrate microtask
Promise.resolve().then(() => {
  console.log("Promise Log");
});

console.log("End");
