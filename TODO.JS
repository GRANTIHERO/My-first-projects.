// Declared all my variables:
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let clearAll = document.getElementById("clear");

// Function to handle the edit functionality
function handleEdit() {
  var currentRow = this.parentNode;
  var taskText = currentRow.firstChild;
  var editInput = document.createElement("input");
  editInput.value = taskText.textContent;
  currentRow.replaceChild(editInput, taskText);
  const doneButton = document.createElement("button");
  doneButton.textContent = "Done";

  // Store a reference to the edit button
  const editButton = this;

  currentRow.replaceChild(doneButton, editButton);
  doneButton.addEventListener("click", function () {
    var updatedText = document.createTextNode(editInput.value);
    currentRow.replaceChild(updatedText, editInput);
    currentRow.replaceChild(editButton, doneButton);
    editButton.addEventListener("click", handleEdit);
  });
}

// Code for Submit button:
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Function for Delete button showing:
    let delButton = document.createElement("button");
    li.append(delButton);
    delButton.textContent = "Delete";

    // Click event for delete button:
    delButton.addEventListener("click", function () {
      var currentRow = this.parentNode;
      currentRow.parentNode.removeChild(currentRow);
      // Remove the item from local storage
      localStorage.setItem("value", listContainer.innerHTML);
      localStorage.removeItem("savedItem");
    });

    // Function for Save button showing:
    let saveButton = document.createElement("button");
    li.append(saveButton);
    saveButton.textContent = "Save";

    // Click event for save button:
    saveButton.addEventListener("click", function () {
      var currentRow = this.parentNode;
      var savedItems = localStorage.getItem("value");
      if (savedItems) {
        savedItems += currentRow.outerHTML;
      } else {
        savedItems = currentRow.outerHTML;
      }
      localStorage.setItem("value", savedItems);
    });

    // Function for edit button showing:
    let editButton = document.createElement("button");
    li.append(editButton);
    editButton.textContent = "Edit";

    // Click event for edit button:
    editButton.addEventListener("click", handleEdit);
  }
  inputBox.value = "";
}

// Code for Clear All button:
clearAll.addEventListener("click", () => {
  inputBox.value = "";
});

window.addEventListener("load", function () {
  const savedValue = localStorage.getItem("value");
  if (savedValue) {
    listContainer.innerHTML = savedValue;

    // Reattach event listeners to delete buttons and save buttons:
    const deleteButtons = document.querySelectorAll("li button:first-child");
    const saveButtons = document.querySelectorAll("li button:nth-child(2)");
    const editButtons = document.querySelectorAll("li button:last-child");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        var currentRow = this.parentNode;
        currentRow.parentNode.removeChild(currentRow);
        localStorage.setItem("value", listContainer.innerHTML);
      });
    });
    saveButtons.forEach((button) => {
      button.addEventListener("click", function () {
        var currentRow = this.parentNode;
        var savedItems = localStorage.getItem("value");
        if (savedItems.includes(currentRow.outerHTML)) {
          alert("This item is already saved.");
        } else {
          savedItems += currentRow.outerHTML;
          localStorage.setItem("value", savedItems);
        }
      });
    });
    editButtons.forEach((button) => {
      button.addEventListener("click", handleEdit);
    });
  }
});
