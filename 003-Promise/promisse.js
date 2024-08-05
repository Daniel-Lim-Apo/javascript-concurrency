function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "some data from promise";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data)) // Expected: "some data from promise"
  .catch((error) => console.error(error));
