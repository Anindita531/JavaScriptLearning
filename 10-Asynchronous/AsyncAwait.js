function loadData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(" Data fetched from server!"), 2000);
  });
}

async function showData() {
  console.log("Loading...");
  const data = await loadData();  // waits without blocking
  console.log(data);
  console.log("Done!");
}

showData();
