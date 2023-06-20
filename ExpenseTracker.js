var iexpense = document.getElementById("input-expense");
iexpense.addEventListener("click", displayDetails);

function displayDetails() {
  var iname = document.getElementById("input-name").value;
  var idate = document.getElementById("input-date").value;
  var iamount = document.getElementById("input-amount").value;
  var iplaceholder = document.getElementById("placeholder");
  //If anything is blank, then send this alert.
  if (!iname || !idate || !iamount) {
    alert("Please fill all the boxes!");
    return;
  }

  var newExpense = document.getElementById("new-expense");
  var rowCount = newExpense.rows.length;

  var newRow = newExpense.insertRow(rowCount - 1);
  let button = document.createElement("button");
  //Creating new cells for each row.
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  //Creating what each cell contains.
  cell1.innerHTML = iname;
  cell2.innerHTML = idate;
  cell3.innerHTML = iamount;
  cell4.append(button);
  button.textContent = "Del";
  //Code so the Del button can delete entire single rows.
  button.addEventListener("click", function () {
    var currentRow = this.parentNode.parentNode;
    currentRow.parentNode.removeChild(currentRow);
    checkRowCount();
  });

  checkRowCount();
}
//Code to renew the placeholder when the table rows are blank.
function checkRowCount() {
  var rowCount = document.getElementById("new-expense").rows.length;
  var placeholder = document.getElementById("placeholder");

  if (rowCount <= 2) {
    placeholder.style.display = "table-cell";
  } else {
    placeholder.style.display = "none";
  }
}
