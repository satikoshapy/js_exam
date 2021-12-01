let num = 0;
label = document.getElementById("rangeLabel")

function getRange() {
    label.innerHTML = document.getElementById("customRange1").value;
    // Assign the max price to a var num
    num = document.getElementById("customRange1").value;
}

let chosenCars = [];

function getApi() {
    fetch(`http://localhost:3000/cars`)
        .then(response => response.json())
        .then(data => {
            getCars(data)
            console.log(Object.values(data[0]))
        })
}

let selectedValue = "";

function getSelectValue() {
    selectedValue = document.getElementById("list").value;
}
getSelectValue();
// Sort by brand name

const getCars = (data) => {
    for (let el of data) {
        if (el.brand === selectedValue) {
            chosenCars.push(el)
        }
    }
    getSortedByPrice();
}

let sortedByPrice = []
const getSortedByPrice = () => {
    for (let i of chosenCars) {
        // Num is the element by id
        if (i.price <= num) {
            sortedByPrice.push(i)
        }
    }
    console.log(sortedByPrice)
}

window.onload = function () {
    // Local storage to pass the sorted array to list.html
    const passSortedList = function (event) {
        let start = document.querySelector("#start-search");
        start.addEventListener("click", function () {
            localStorage.setItem("sorted-list", JSON.stringify(sortedByPrice))
            window.document.location = "./list.html"
        })
    };
    passSortedList();
}