const noteInput = document.querySelector("#noteInput");
const saveBtn = document.querySelector("#saveBtn");
const noteList = document.querySelector("#noteList");

// Load saved notes from Local Storage
let notes = JSON.parse(localStorage.getItem("notes")) || [];
//Download Notes
 function downloadPdf(){
 // Wait until button is clicked
  document.getElementById("savePdf").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;  // Access jsPDF library
    const doc = new jsPDF();         // Create a new PDF file

    // Get text from textarea
    const text = notes || "No notes written.";

    // Add text to PDF at position (10, 10)
    doc.text(text, 10, 10);

    // Download PDF with name 'MyNotes.pdf'
    doc.save("MyNotes.pdf");
  });
} 
// Display all saved notes
function displayNotes() {
  noteList.innerHTML = "";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${note}
      <button onclick="deleteNote(${index})">❌</button>
    `;
    noteList.appendChild(li);
  });
}

// Save new note
saveBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    displayNotes();
  }
});

// Delete note
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

// Show notes on page load
displayNotes();
