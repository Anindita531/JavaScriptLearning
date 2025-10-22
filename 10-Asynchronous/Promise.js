const myPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("🎉 Data loaded successfully!");
  } else {
    reject("❌ Failed to load data!");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
