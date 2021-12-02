
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



function allowDrop(event) {
    event.preventDefault(); // Allow to drop here
}

function drag(event) {
    event.dataTransfer.setData("name", event.target.innerHTML); // Send info to the event
    event.dataTransfer.setData("id", event.target.id); // Send info to the event
}

function dropLike(event) {
    //removes liked cars from the list and call likeCar to create an array of liked cars
    event.preventDefault();
    const carName = event.dataTransfer.getData("name"); // Get info from the event
    const itemId = event.dataTransfer.getData("id"); // Get info from the event
    likeCar(carName);
    document.getElementById(itemId).remove();
}

function dropDislike(event) {
    // removes disliked cars
    event.preventDefault();
    const carName = event.dataTransfer.getData("name"); // Get info from the event
    const itemId = event.dataTransfer.getData("id"); // Get info from the event
    document.getElementById(itemId).remove();
}
let likedCars = [];
function likeCar(carName) {
    // pushes cars into a list that will later be passed into box.html page
    likedCars.push(carName);
    console.log(likedCars)
}


let likedList = [];

// Code that is going to be executed when the page loads
window.onload = function () {

    const displaySorted = function(event) {
        //let liked = document.querySelector("#liked");
        likedList = JSON.parse(localStorage.getItem("sorted-list"))
         
        
    }
    displaySorted()
    console.log(likedList)


    let ind = 0;
    const showCars = (likedList) => {
        
    for (let car of likedList) {
        ind += 1;
        addString("Item" + ind, `
        <img src="${car.img}" class="card-img-top" alt="...">
        <h2>${car.brand}</h2>
        <div class="card-body">
            <h5 class="card-title">${car.carname}</h5>
            <h5 style="color:red;">${car.price} euros</h5>
        </div>
        
        `);
        
    }
   }
   showCars(likedList)
  //initializes and passes data to the ./box.html page 
   const passList = function(event) {
    let box = document.querySelector("#box_link");

    box.addEventListener("click", function() {
        localStorage.setItem("liked-list", likedCars)
        window.document.location = "./box.html"
    })
};
passList();

};
