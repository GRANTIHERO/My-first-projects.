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
      // Remove the item from local storage
      localStorage.setItem("value", listContainer.innerHTML);
      localStorage.removeItem("savedItem");
    });

    // Function for Save button showing.
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
  }

  inputBox.value = "";
}

// Code for Clear All button.
clearAll.addEventListener("click", () => {
  inputBox.value = "";
});

// Restore saved list from local storage
window.addEventListener("load", function () {
  const savedValue = localStorage.getItem("value");
  if (savedValue) {
    listContainer.innerHTML = savedValue;

    // Reattach event listeners to delete buttons
    const deleteButtons = document.querySelectorAll("li button");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        var currentRow = this.parentNode;
        currentRow.parentNode.removeChild(currentRow);
        localStorage.setItem("value", listContainer.innerHTML);
        localStorage.removeItem("savedItem");
      });
    });
  }
});
