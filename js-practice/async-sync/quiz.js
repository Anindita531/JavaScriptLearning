// --- Step 1: Simulate Fetching Questions from Server ---
function fetchQuestions() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const questions = [
                { q: "2 + 2?", options: ["3","4","5"], answer: "4" },
                { q: "Sky color?", options: ["Blue","Green","Red"], answer: "Blue" },
                { q: "JS stands for?", options: ["JavaScript","JavaSoup","JustScript"], answer: "JavaScript" }
            ];
            resolve(questions);
        }, 2000); // 2 seconds delay to simulate API
    });
}

// --- Step 2: Ask User Name ---
function getUserName() {
    let name = prompt("Enter your name:");
    if(!name) name = "Guest";
    console.log(`Hello, ${name}! Ready for the quiz?`);
    return name;
}

// --- Step 3: Ask Question Function ---
async function askQuestion(qObj) {
    console.log("\nQuestion:", qObj.q);
    console.log("Options:", qObj.options.join(", "));
    
    let answer = prompt("Your answer:");
    
    if(answer === qObj.answer) {
        console.log("Correct!");
        return 1; // score
    } else {
        console.log(`Wrong! Correct answer: ${qObj.answer}`);
        return 0;
    }
}

// --- Step 4: Quiz Runner Function ---
async function runQuiz() {
    const userName = getUserName();
    const questions = await fetchQuestions(); // wait for simulated API  

    let score = 0;
    
    for(let q of questions) {
        score += await askQuestion(q); // sequentially ask questions
    }

    console.log(`\n${userName}, your final score is ${score} / ${questions.length}`);
}

// --- Step 5: Start the Quiz ---
runQuiz();