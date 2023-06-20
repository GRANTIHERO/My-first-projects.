const addNoteButton = document.getElementById("add-note");
const textAreaAll = document.getElementsByClassName("list");
const noteContainer = document.getElementById("container");

addNoteButton.addEventListener("click", function() {
  const textAreas = document.querySelectorAll('.list');
  let emptyTextArea = null;
  for (const textarea of textAreas) {
    if (textarea.value === '') {
      emptyTextArea = textarea;
      break;
    }
  }
  if (emptyTextArea) {
    emptyTextArea.focus();
  } else {
    const newNote = document.createElement("div");
    newNote.className = "list";
  
    const newTextArea = document.createElement("textarea");
    newTextArea.className = "note-textarea";
    newNote.appendChild(newTextArea);
  
    newTextArea.addEventListener("keyup", e => {
      let scHeight = e.target.scrollHeight;
      newTextArea.style.height = "auto";
      newTextArea.style.height = `${scHeight}px`;
    });
  
    newTextArea.addEventListener("click", function(event) {
      event.stopPropagation();
    });
  
    document.addEventListener("click", function(event) {
      if (!newTextArea.contains(event.target)) {
        newTextArea.style.height = "auto";
      }
    });
  
    noteContainer.appendChild(newNote);
    newTextArea.focus();
  }
});

for (const textArea of textAreaAll) {
  textArea.addEventListener("keyup", e => {
    let scHeight = e.target.scrollHeight;
    textArea.style.height = "auto";
    textArea.style.height = `${scHeight}px`;
  });

  textArea.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  document.addEventListener("click", function(event) {
    if (!textArea.contains(event.target)) {
      textArea.style.height = "auto";
    }
  });
}