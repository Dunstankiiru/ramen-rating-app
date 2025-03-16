// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", main);

// Predefined ramen data with GitHub image URLs
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "/resources/images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "./resources/images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Naruto", image: "./resources/images/naruto.jpg", rating: 7, Comment: "Well Cooked!" },
    { id: 4, name: "Nirvana Ramen", restaurant: "Nirvanaa", image: "./resources/images/nirvana.jpg", rating: 3, comment: "Too Watery!" },
    { id: 5, name: "Gyukotsu Ramen", restaurant: "Gyukotsu-ya", image: "./resources/images/gyukotsu.jpg", rating: 5, comment: "Tasty!" },
    { id: 6, name: "Noodles Ramen", restaurant: "Chu San", image: "./resources/images/noodles.jpg", rating: 8, comment: "Finger-licking sweet!" },
    { id: 7, name: "Urchins Ramen", restaurant: "Father Secret", image: "./resources/images/urchins.jpg", rating: 6, comment: "Delicious, one plate ain't enough! haha" }

];

let selectedRamen= null;
//Function that assists to display Ramen Images

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";

    //Display the details for the first ramen automatically on page load without user interaction.
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }


    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

//Function to display ramen details when an image is clicked

function handleClick(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;

    selectedRamen = ramen;
    // showing the action buttons

    document.getElementById("action-buttons").style.display = "block";
}


//Function to handle form submission

function addSubmitListener() {
    const ramenForm = document.getElementById("new-ramen-form");

    ramenForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get values from the form inputs
        const newRamen = {
            id: ramens.length + 1,
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

//update function
function addupdateListener() {
    const ratingInput = document.getElementById("ramen-rating");
    const commentInput = document.getElementById("ramen-comment");

    ratingInput.addEventListener("input", () => {
        if (selectedRamen) {
            selectedRamen.rating = ratingInput.value;
        }
    });

    commentInput.addEventListener("input", () => {
        if (selectedRamen) {
            selectedRamen.rating = ratingInput.value;
        }
    });

    commentInput.addEventListener("input", () => {
        if (selectedRamen) {
            selectedRamen.comment = commentInput.value;
        }
    });
}

// delete function

function addDeleteListener() {
    const deleteButton = document.getElementById("delete-ramen");

    deleteButton.addEventListener("click", () => {
        if (selectedRamen) {
            // Find the ramen index
            const index = ramens.findIndex((r) => r.id === selectedRamen.id);
            if (index !== -1) {
                ramens.splice(index, 1); // Remove ramen from array
            }

            // Remove ramen from menu
            displayRamens(); // Refresh menu

            // Reset ramen details display
            document.getElementById("ramen-image").src = "";
            document.getElementById("ramen-name").textContent = "";
            document.getElementById("ramen-restaurant").textContent = "";
            document.getElementById("ramen-rating").textContent = "";
            document.getElementById("ramen-comment").textContent = "";

            // Hide action buttons
            document.getElementById("action-buttons").style.display = "none";

            selectedRamen = null; // Reset selected ramen
        }
    });
}


// Main function to initialize the app

function main() {
    displayRamens();
    addSubmitListener();
    addupdateListener();
    addDeleteListener();
}