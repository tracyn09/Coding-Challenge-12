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




