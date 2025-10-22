console.log("1️ Start");

function waitFor3Seconds() {
  let start = Date.now();
  while (Date.now() - start < 3000) {}
  console.log("2️ Waited 3 seconds");
}

waitFor3Seconds();
console.log("3 Done!");
