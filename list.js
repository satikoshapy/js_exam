// Adds a string item to the list
function addString(id, str) {
    const preItem = `
        <li class="list-group-item" 
        id="${id}"
         draggable="true"
         ondragstart="drag(event)">
        `;
    const postItem = "</li>";
    document.getElementById("car-list").innerHTML += preItem + str + postItem;
}

// Changes car into a string and adds it to the list
function addCar(car) {
    let carString = car;
    addString(carString);
}

function allowDrop(event) {
    event.preventDefault(); // Allow to drop here
}

function drag(event) {
    event.dataTransfer.setData("name", event.target.innerHTML); // Send info to the event
    event.dataTransfer.setData("id", event.target.id); // Send info to the event
}

function dropLike(event) {
    event.preventDefault();
    const carName = event.dataTransfer.getData("name"); // Get info from the event
    const itemId = event.dataTransfer.getData("id"); // Get info from the event
    likeCar(carName);
    document.getElementById(itemId).remove();
}

function dropDislike(event) {
    // TODO
}

function likeCar(carName) {
    // TODO: Add the car to the liked list
    console.log(carName);
}

// Code that is going to be executed when the page loads
window.onload = function () {

    // TODO: Fetch from API, it will return a list of elements
    // For every element in the list -> addCar
    // Test code, remove after API is fetched
    for (let i = 1; i <= 20; i++) {
        addString("Item" + i, "Car " + i);
    }
};