// Product premium subsrcirption and discount
let productName = "Spendwise premium";
let price = 15.99
let discountRate = 0.2;  

// Calculate discount
let discountAmount = price * discountRate;
let discountedPrice = price - discountAmount;

// Output to console to verify
console.log("For the Product ", productName);
console.log("The original Price is $" + price);
console.log("With code 'SPENDWISE' you get a 20% discount which is $" + discountAmount + " off the original price");
console.log("your final Price after Discount would be $" + discountedPrice);

//DOM interactions

//get element by id
let getBalanceSpan = document.getElementById('balance-span')

//get element by class name
let getActivity = document.getElementsByClassName('activity-panel')

// get element by tag name
let getParagraph = document.getElementsByTagName('p')

// query selector
let selectAcivity = document.querySelector('.activity-panel')

// update variable with textContent
getBalanceSpan.textContent = `Product: ${productName}`;

// display your variable(s) containing data with innerHTML
// Store the HTML content with italicized text
let discountedPriceContent = `Discounted Price: <i>$${discountedPrice}</i>`;

// Select the element by ID to update its content
let displayElement = document.getElementById('balance-span');

// Update the content of 'displayElement' by setting its innerHTML to 'discountedPriceContent'
displayElement.innerHTML = discountedPriceContent;