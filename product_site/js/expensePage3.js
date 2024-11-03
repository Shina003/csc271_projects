// Sample initial items just so i can have another loop :)
const initialItems = [
    { title: "Freelance Project", amount: "$500", note: "Website development" },
    { title: "Salary", amount: "$3000", note: "Monthly salary" },
    { title: "Investment Return", amount: "$150", note: "Stock dividends" }
];

// Select the container to display items
const itemListContainer = document.querySelector(".item-list");

// Using a `for` loop to add each initial item to the item list
for (let i = 0; i < initialItems.length; i++) {
    // Create a new div for each item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    // Set inner HTML for the item
    itemDiv.innerHTML = `
        <span>${initialItems[i].title}: ${initialItems[i].amount} - ${initialItems[i].note}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Append the item to the container
    itemListContainer.appendChild(itemDiv);
}

// Attach delete functionality to all initial items using `forEach` loop
document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.remove(); // Remove the item when the delete button is clicked
    });
});

// Open the form by setting display to "block" when "Add item" button is clicked
document.querySelector(".open-button").addEventListener("click", () => {
    document.getElementById("myForm").style.display = "block";
});

// Close the form by setting display to "none" when "Close" button in the form is clicked
document.querySelector(".form-container .btn[type='button']").addEventListener("click", () => {
    document.getElementById("myForm").style.display = "none";
});

// Handle form submission to add a new item
document.querySelector(".form-container").addEventListener("submit", (event) => {
    // Prevent the form from actually submitting and redirecting
    event.preventDefault();

    // Get values from the form fields
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const note = document.getElementById("note").value;

    // Check each field individually
    if (title === "") {
        alert("Please fill in the Title field.");
    } else if (amount === "" || isNaN(amount)) {
        alert("Please fill in the Amount field.");
    } else if (note === "") {
        alert("Please fill in the Note field.");
    } else {
        // All fields are filled - Add the new entry to the item list
        alert("Entry added successfully."); // Show success message as popup

        // Create a new div for the item (income or expense)
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        // Set inner HTML for the item
        itemDiv.innerHTML = `
            <span>${title}: ${amount} - ${note}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Append the new item to the item list container
        itemListContainer.appendChild(itemDiv);

        // Add an event listener to the delete button of the new item
        itemDiv.querySelector(".delete-btn").addEventListener("click", () => {
            itemDiv.remove(); // Remove the item when the delete button is clicked
        });

        // Close the form
        document.getElementById("myForm").style.display = "none";

        // Clear form fields for the next entry
        document.getElementById("title").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("note").value = "";
    }
});
