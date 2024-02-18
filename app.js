const openForm = document.querySelector(".open-form");
const formSection = document.querySelector(".form-section");
const cancelButton = document.querySelector(".cancel-button");
const deleteButton = document.querySelector(".delete-button");

//form
const form = document.querySelector("form");

// inputs
const nameInput = document.querySelector(".name-input");
const ageInput = document.querySelector(".age-input");
const emailInput = document.querySelector(".email-input");
const cityInput = document.querySelector(".city-input");

//table
const tableBody = document.querySelector(".table-body");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = nameInput.value;
  nameInput.value = "";
  let age = ageInput.value;
  ageInput.value = "";
  let email = emailInput.value;
  emailInput.value = "";
  let city = cityInput.value;
  cityInput.value = "";

  const tableRow = document.createElement("tr");
  //name
  const nameTableData = document.createElement("td");
  nameTableData.innerText = name;
  tableRow.appendChild(nameTableData);
  //age
  const ageTableData = document.createElement("td");
  ageTableData.innerText = age;
  tableRow.appendChild(ageTableData);
  //email
  const emailTableData = document.createElement("td");
  emailTableData.innerText = email;
  tableRow.appendChild(emailTableData);
  //city
  const cityTableData = document.createElement("td");
  cityTableData.innerText = city;
  tableRow.appendChild(cityTableData);

  //final Insertion in tbody
  tableBody.appendChild(tableRow);
  evenOddRows();
  handleSelectedRows();
  handleShowDeleteButton();

  //closing form
  formSection.style.display = "none";
});

openForm.addEventListener("click", () => {
  formSection.style.display = "flex";
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  formSection.style.display = "none";
});

// odd, even row colors
function evenOddRows() {
  const tableRows = document.querySelectorAll("tbody > tr");

  tableRows.forEach((row, index) => {
    row.style.color = "black";
    if (index % 2 === 1) {
      row.style.backgroundColor = "#f5f6f7";
    } else {
      row.style.backgroundColor = "#dbdbdb";
    }
  });
}

evenOddRows();

// deleting rows

let selectedRow;

deleteButton.addEventListener("click", () => {
  selectedRow.remove();
  selectedRow = undefined;
  evenOddRows();
  handleShowDeleteButton();
});

function handleSelectedRows() {
  const tableRows = document.querySelectorAll("tbody tr");

  tableRows.forEach((row, index) => {
    row.addEventListener("click", () => {
      evenOddRows();
      row.style.backgroundColor = "blue";
      row.style.color = "white";
      selectedRow = row;
      handleShowDeleteButton();
    });
  });
}

handleSelectedRows();

// delete button and empty text

function handleShowDeleteButton() {
  const tableRows = document.querySelectorAll("tbody tr");
  const emptyText = document.querySelector(".empty-text");

  if (!tableRows.length) {
    emptyText.innerText = "No Data is Available";
  } else {
    emptyText.innerText = "";
  }

  if (!!selectedRow) {
    deleteButton.style.display = "block";
  } else {
    deleteButton.style.display = "none";
  }
}

handleShowDeleteButton();
