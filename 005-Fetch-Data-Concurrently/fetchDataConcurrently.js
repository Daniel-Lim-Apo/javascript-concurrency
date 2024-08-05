async function fetchFromAPI1() {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data from API 1"), 4000);
  });
}

async function fetchFromAPI2() {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data from API 2"), 1000);
  });
}

async function fetchData() {
  try {
    const [data1, data2] = await Promise.all([
      fetchFromAPI1(),
      fetchFromAPI2(),
    ]);
    console.log("Data from both APIs:", data1, data2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
