import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 🔹 Supabase Config
const SUPABASE_URL = "https://gtwabwtnrnpcrhlhodbm.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0d2Fid3Rucm5wY3JobGhvZGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5OTQxODAsImV4cCI6MjA3NjU3MDE4MH0.UntANCRx12jEoCDT0PSD2L5lpIb7lH0KDvS5FxvUIT4";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// 🔹 DOM Elements
const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const title = document.getElementById("title");
const description = document.getElementById("description");
const notesList = document.getElementById("notesList");

// 🔹 Upload Function
uploadBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];
  if (!file || !title.value.trim()) return alert("Please fill all fields!");

  try {
    // Step 1️⃣: Upload file to Supabase Storage
    const filePath = `${Date.now()}_${file.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("notes") // <-- your Supabase bucket name
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) throw uploadError;

    // Step 2️⃣: Get public URL for the uploaded file
    const { data: publicData } = supabase.storage
      .from("notes")
      .getPublicUrl(filePath);
    const fileURL = publicData.publicUrl;

    // Step 3️⃣: Insert file info into Supabase Table
    const { error: dbError } = await supabase.from("books").insert([
      {
        title: title.value,
        description: description.value,
        file_url: fileURL,
        uploaded_by: "Admin",
        category: "General",
      },
    ]);

    if (dbError) throw dbError;

    alert("✅ File uploaded successfully!");
    fileInput.value = "";
    title.value = "";
    description.value = "";
    fetchNotes();
  } catch (err) {
    console.error("Upload failed:", err);
    alert("❌ Upload failed. Please check console for details.");
  }
});

// 🔹 Fetch and Display Notes
async function fetchNotes() {
  const { data, error } = await supabase
    .from("books")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  notesList.innerHTML = "";
  data.forEach((note) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${note.title}</strong> - ${note.description}<br>
      <a href="${note.file_url}" target="_blank" rel="noopener noreferrer">
        📄 View / Download PDF
      </a>
    `;
    notesList.appendChild(li);
  });
}

// Load notes on page start
fetchNotes();
