//Task 1
let dashboard = document.getElementById("dashboard")
const dashboard2 = document.querySelector("#dashboard")

let revenueCard = document.createElement("div") 
revenueCard.setAttribute("class", "metric-card")
revenueCard.setAttribute("id", "revenueCard")

let title = document.createElement("h3")
title.textContent = "Revenue"
let value = document.createElement("p")
value.textContent = "$0"

revenueCard.appendChild(title)
revenueCard.appendChild(value)
dashboard.appendChild(revenueCard)

//Task 2
let profitCard = document.createElement("div");
profitCard.setAttribute("class", "metric-card");
profitCard.setAttribute("id", "profitCard");

let profitTitle = document.createElement("h3");
profitTitle.textContent = "Profit";                     //Creating Profit Card
let profitValue = document.createElement("p");
profitValue.textContent = "$0";

profitCard.appendChild(profitTitle);
profitCard.appendChild(profitValue);
dashboard.appendChild(profitCard);

let expensesCard = document.createElement("div");
expensesCard.setAttribute("class", "metric-card");
expensesCard.setAttribute("id", "expensesCard");

let expensesTitle = document.createElement("h3");
expensesTitle.textContent = "Expenses";                 //Creating Expenses Card
let expensesValue = document.createElement("p");
expensesValue.textContent = "$0";

expensesCard.appendChild(expensesTitle);
expensesCard.appendChild(expensesValue);
dashboard.appendChild(expensesCard);

const myNodeList = document.querySelectorAll('.metric-card')
const array = Array.from(myNodeList)

array.forEach(card => {
    const title = card.querySelector("h3")
    title.textContent = `${title.textContent} - Updated`
    card.style.backgroundColor = "lightpink"
})

//Task 3
const inventoryList = document.getElementById(`inventoryList`)

function addInventoryItem(productName) {
    const newProduct = document.createElement(`li`)
    newProduct.textContent = productName

    newProduct.setAttribute(`class`, `product-item`)
    inventoryList.appendChild(newProduct)

    newProduct.addEventListener(`click`, () => {
        inventoryList.removeChild(newProduct)
    })
}

//Task 4
const customerSection = document.getElementById("customerSection")
const customerCards = document.querySelectorAll(".customer-card")

customerSection.addEventListener("click", () => {
    console.log("Customer section clicked")
})
customerCards.forEach(card => {
    card.addEventListener("click", (event) => {
        console.log("Customer card clicked")
        event.stopPropagation()
})
})




