import { addNote, renderNotes } from "./notes.js";

const input = document.querySelector("#noteInput");
const addBtn = document.querySelector("#addBtn");
const notesContainer = document.querySelector("#notes");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    addNote(text);
    input.value = "";
    renderNotes(notesContainer);
  }
});

window.addEventListener("load", () => renderNotes(notesContainer));
