const STORAGE_KEY = "myNotes";

export function getNotes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}
