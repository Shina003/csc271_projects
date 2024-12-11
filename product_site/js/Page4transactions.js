document.addEventListener("DOMContentLoaded", () => {
  // Fetch income and expense data from localStorage
  const incomeData = JSON.parse(localStorage.getItem("incomeData")) || [];
  const expenseData = JSON.parse(localStorage.getItem("expenseData")) || [];

  // Combine income and expense into a single array
  const allTransactions = [
    ...incomeData.map((t) => ({ ...t, type: "Income" })),
    ...expenseData.map((t) => ({ ...t, type: "Expense" })),
  ];

  // Sort transactions by date
  allTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Display transactions as a table
  displayTransactionsTable(allTransactions);

  // Update summary
  updateSummary(allTransactions);

  // Add filter functionality
  document
    .getElementById("filter-btn")
    .addEventListener("click", () => applyFilters(allTransactions));

  // Add search functionality
  document.getElementById("search-bar").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredTransactions = allTransactions.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.type.toLowerCase().includes(query)
    );
    displayTransactionsTable(filteredTransactions);
  });
});

// Function to display transactions in a table
function displayTransactionsTable(transactions) {
  const transactionTable = document.getElementById("transaction-table");
  transactionTable.innerHTML = ""; // Clear previous content

  // Add table headers
  transactionTable.innerHTML = `
        <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Title</th>
            <th>Note</th>
            <th>Amount</th>
        </tr>
    `;

  // Populate table rows
  transactions.forEach((transaction) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>${transaction.title}</td>
            <td>${transaction.category}</td>
            <td style="color: ${
              transaction.type === "Income" ? "green" : "red"
            };">
                ${transaction.type === "Income" ? "+" : "-"}${
      transaction.amount
    }
            </td>
        `;
    transactionTable.appendChild(row);
  });
}

// Function to update the summary section
function updateSummary(transactions) {
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + parseFloat(t.amount.replace("$", "")), 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + parseFloat(t.amount.replace("$", "")), 0);

  const netBalance = totalIncome - totalExpenses;

  document.getElementById("total-income").textContent = `$${totalIncome.toFixed(
    2
  )}`;
  document.getElementById(
    "total-expenses"
  ).textContent = `$${totalExpenses.toFixed(2)}`;
  document.getElementById("net-balance").textContent = `$${netBalance.toFixed(
    2
  )}`;
}

// Function to apply filters
function applyFilters(allTransactions) {
  const typeFilter = document.getElementById("type-filter").value;

  let filteredTransactions = allTransactions;
  if (typeFilter !== "all") {
    filteredTransactions = allTransactions.filter(
      (t) => t.type.toLowerCase() === typeFilter.toLowerCase()
    );
  }

  displayTransactionsTable(filteredTransactions);
}
