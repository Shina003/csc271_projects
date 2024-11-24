// Constructor Notation 
class ExpenseItem {
    constructor(title, amount, note) {
        // Assign properties
        this.title = title;
        this.amount = amount.startsWith("$") ? amount : `$${amount}`;
        this.note = note;
    }

    // Method to display the item as a formatted string
    displayItem() {
        return `${this.title}: ${this.amount} - ${this.note}`;
    }
}

// Create instances of ExpenseItem
const item1 = new ExpenseItem("Gym Membership", "$50", "Monthly fee for gym");
const item2 = new ExpenseItem("Book", "25", "JavaScript programming guide");

// Update initialItems with these instances
const initialItems = [
    new ExpenseItem("Steam Game", "70", "Monster Hunter"),
    new ExpenseItem("Groceries", "180", "Groceries"),
    new ExpenseItem("Netflix", "25", "Netflix subscription"),
    item1,
    item2
];

// Select the container to display items
const itemListContainer = document.querySelector(".item-list");

// Function to add an item to the item list
function addItem(expenseItem) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
        <span>${expenseItem.displayItem()}</span>
        <button class="delete-btn">Delete</button>
    `;
    itemListContainer.appendChild(itemDiv);

    // Attach delete functionality to the delete button
    initializeDeleteButton(itemDiv.querySelector(".delete-btn"));
}

// Function to display initial items
function displayInitialItems() {
    initialItems.forEach(item => addItem(item));
}

// Function to initialize delete functionality for a single button
function initializeDeleteButton(deleteButton) {
    deleteButton.addEventListener("click", () => {
        deleteButton.parentElement.remove();
    });
}

// Function to initialize delete functionality for all existing items
function initializeDeleteButtonsForExistingItems() {
    const existingItems = document.querySelectorAll(".item");
    existingItems.forEach(item => {
        const deleteButton = item.querySelector(".delete-btn");
        if (deleteButton) {
            initializeDeleteButton(deleteButton);
        }
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const note = document.getElementById("note").value;

    if (validateInputs(title, amount, note)) {
        const newItem = new ExpenseItem(title, amount, note);
        addItem(newItem);
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
    initializeDeleteButtonsForExistingItems();
});
