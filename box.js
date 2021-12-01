const displayLiked = function (event) {
    let liked = document.querySelector("#box-list");
    if (localStorage.getItem("liked-list").length == 0) {
        liked.innerHTML = "You have not chosen any car yet"
    } else {
        liked.innerHTML = localStorage.getItem("liked-list")
    }
}
document.addEventListener("DOMContentLoaded", function () {
    displayLiked()
})