async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "some data from promise to async";
      resolve(data);
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data); // "some data from promise to async"
  } catch (error) {
    console.error(error);
  }
}

getData();
