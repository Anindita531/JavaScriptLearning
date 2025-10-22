import { saveNotes, getNotes } from "./storage.js";

export function addNote(text) {
  const notes = getNotes();
  notes.push(text);
  saveNotes(notes);
}

export function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);
}

export function renderNotes(container) {
  const notes = getNotes();
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.textContent = note;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", () => {
      deleteNote(index);
      renderNotes(container);
    });

    div.appendChild(delBtn);
    container.appendChild(div);
  });
}
