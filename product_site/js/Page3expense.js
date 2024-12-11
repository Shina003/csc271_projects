// Function to update totals dynamically
function updateTotals() {
    const items = document.querySelectorAll('.item');

    // Calculate total items
    const totalItems = items.length;

    // Calculate total expenses
    const totalExpenses = Array.from(items).reduce((sum, item) => {
        const costText = item.textContent.match(/\$\d+/); // Match dollar amounts
        const cost = costText ? parseInt(costText[0].substring(1)) : 0; // Convert amount to number
        return sum + cost;
    }, 0);

    // Update the totals in the summary container
    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-cost').textContent = `$${totalExpenses}`;
}

// Search bar functionality
document.getElementById('search-bar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

// Select the container to display items
const itemListContainer = document.querySelector(".item-list");

// Function to add an expense to the list
function addItem(title, amount, note, date = new Date().toISOString().split('T')[0], addToLocalStorage = true) {
    if (!amount.startsWith("$")) {
        amount = `$${amount}`;
    }

    if (addToLocalStorage) {
        // Store the new item in local storage
        const expenseData = JSON.parse(localStorage.getItem('expenseData')) || [];
        expenseData.push({ date, title, amount, category: note });
        localStorage.setItem('expenseData', JSON.stringify(expenseData));
    }

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
        <span>${date}</span>
        <span>${title}: ${amount} - ${note}</span>
        <button class="delete-btn">Delete</button>
    `;
    itemListContainer.appendChild(itemDiv);

    // Attach delete functionality to the delete button
    itemDiv.querySelector(".delete-btn").addEventListener("click", () => {
        itemDiv.remove();
        // Remove the item from local storage
        const expenseData = JSON.parse(localStorage.getItem('expenseData')) || [];
        const updatedExpenseData = expenseData.filter(
            (item) => item.title !== title || item.amount !== amount || item.category !== note
        );
        localStorage.setItem('expenseData', JSON.stringify(updatedExpenseData));
        updateTotals();
    });

    updateTotals();
}

// Function to display items saved in localStorage
function displayInitialItems() {
    const savedItems = JSON.parse(localStorage.getItem('expenseData')) || [];
    savedItems.forEach(item => addItem(item.title, item.amount, item.category, item.date, false)); // Do not add to localStorage
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const note = document.getElementById("note").value;

    if (validateInputs(title, amount, note)) {
        addItem(title, amount, note);
        alert("Expense added successfully.");
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

// Initialize the display of saved items and totals
document.addEventListener("DOMContentLoaded", () => {
    displayInitialItems();
    updateTotals();
});
