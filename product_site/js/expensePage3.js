// Sample initial items
const initialItems = [
    { title: "steam game", amount: "$70", note: "Monster Hunter" },
    { title: "groceries", amount: "$180", note: "Groceries" },
    { title: "Netflix", amount: "$25", note: "Netflix subscription" }
];

// Select the container to display items
const itemListContainer = document.querySelector(".item-list");

// Function to add an item to the item list
function addItem(title, amount, note) {
    // Prepend dollar sign if it’s not already there
    if (!amount.startsWith("$")) {
        amount = `$${amount}`;
    }

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
        <span>${title}: ${amount} - ${note}</span>
        <button class="delete-btn">Delete</button>
    `;
    itemListContainer.appendChild(itemDiv);

    // Attach delete functionality to the delete button
    itemDiv.querySelector(".delete-btn").addEventListener("click", () => {
        itemDiv.remove();
    });
}

// Function to display initial items
function displayInitialItems() {
    initialItems.forEach(item => addItem(item.title, item.amount, item.note));
}

// Function to initialize delete functionality for existing items
function initializeDeleteButtons() {
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.parentElement.remove();
        });
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const note = document.getElementById("note").value;

    if (validateInputs(title, amount, note)) {
        addItem(title, amount, note);
        alert("Entry added successfully.");
        document.getElementById("myForm").style.display = "none";
        clearFormFields();
    }
}

// Function to validate form inputs
function validateInputs(title, amount, note) {
    if (title === "") {
        alert("Please fill in the Title field.");
        return false;
    } else if (amount === "" || isNaN(amount)) {
        alert("Please fill in the Amount field.");
        return false;
    } else if (note === "") {
        alert("Please fill in the Note field.");
        return false;
    }
    return true;
}

// Function to clear form fields after submission
function clearFormFields() {
    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("note").value = "";
}

// Event listeners
document.querySelector(".open-button").addEventListener("click", () => {
    document.getElementById("myForm").style.display = "block";
});

document.querySelector(".form-container .btn[type='button']").addEventListener("click", () => {
    document.getElementById("myForm").style.display = "none";
});

document.querySelector(".form-container").addEventListener("submit", handleFormSubmit);

// Initialize the display of initial items and delete functionality for existing items
document.addEventListener("DOMContentLoaded", () => {
    displayInitialItems();
    initializeDeleteButtons();
});
