// Function to fetch data from local storage
function fetchTransactionData() {
    const incomeData = JSON.parse(localStorage.getItem('incomeData')) || [];
    const expenseData = JSON.parse(localStorage.getItem('expenseData')) || [];
    return { incomeData, expenseData };
}

// Function to calculate total income and expenses
function calculateTotals(data) {
    const totalIncome = data.incomeData.reduce((sum, item) => sum + parseFloat(item.amount.replace('$', '')), 0);
    const totalExpenses = data.expenseData.reduce((sum, item) => sum + parseFloat(item.amount.replace('$', '')), 0);
    return { totalIncome, totalExpenses };
}

// Function to render the chart
function renderChart(income, expenses) {
    const ctx = document.getElementById('incomeExpenseChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie', // Pie chart for income vs. expenses
        data: {
            labels: ['Income', 'Expenses'],
            datasets: [{
                data: [income, expenses],
                backgroundColor: ['#4CAF50', '#FF5733'], // Green for income, red for expenses
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

// On page load, fetch data and render the chart
document.addEventListener('DOMContentLoaded', () => {
    const transactionData = fetchTransactionData();
    const totals = calculateTotals(transactionData);
    renderChart(totals.totalIncome, totals.totalExpenses);
});
