// Declared all my variables.
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let clearAll = document.getElementById("clear");

// Code for Submit button.
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Function for Delete button showing.
    let delButton = document.createElement("button");
    li.append(delButton);
    delButton.textContent = "Delete";

    // Click event for delete button:
    delButton.addEventListener("click", function () {
      var currentRow = this.parentNode;
      currentRow.parentNode.removeChild(currentRow);
    });

    // Function for Save button showing.
    let saveButton = document.createElement("button");
    li.append(saveButton);
    saveButton.textContent = "Save";

    // Click event for save button:
    saveButton.addEventListener("click", function () {
      var storedItem = localStorage.getItem(storedItem);
      localStorage.setItem("storedItem", currentRow);
    });
  }
  inputBox.value = "";
}

// Code for Clear All button.
clearAll.addEventListener("click", () => {
  inputBox.value = "";
});
