// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", main);

// Predefined ramen data with GitHub image URLs
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Naruto", image: "naruto.jpg" },
    { id: 4, name: "Nirvana Ramen", restaurant: "Nirvanaa", image: "nirvana.jpg" },
    { id: 5, name: "Gyukotsu Ramen", restaurant: "Gyukotsu-ya", image: "gyukotsu.jpg" }
];

//Display Ramen Images

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen)); 
        ramenMenu.appendChild(img);
    });
}

//Function to display ramen details when a ramen image is clicked

function handleClick(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

//Function to handle form 

function addSubmitListener() {
    const ramenForm = document.getElementById("new-ramen-form");

    ramenForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get values from the form inputs
        const newRamen = {
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value
        };

        
        ramens.push(newRamen);

        // Add new ramen to the menu 
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));
        document.getElementById("ramen-menu").appendChild(img);

        // Display the new ramen's details
        handleClick(newRamen);

        // Reset form fields
        ramenForm.reset();
    });
}

//function to hande updates

function addupdateListener(){
    const ratingInput = document.getElementById("ramen-rating");
    const commentInput = document.getElementById("ramen-comment");
}

// Main function to initialize the app

function main() {
    displayRamens();
    addSubmitListener();
}
