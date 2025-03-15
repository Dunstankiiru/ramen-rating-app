/*function to hande updates

function addupdateListener(){
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

    commentInput.addEventListener("input", () =>{
        if (selectedRamen) {
            selectedRamen.comment = commentInput.value;
        }
    });
}

// function to handle deletion

function addDeleteListener(){
    const deleteButton = document.getElementById("delete-ramen");
    
    deleteButton.addEventListener("click", () => {
        if (selectedRamen) {
            const index = ramens.findIndex((r) => r.id === selectedRamen.id);
            if (index !== -1){
                ramens.splice(index, 1); //removes ramen from array
            }
            
            const ramenMenu = document.getElementById("ramen-menu");
            ramenMenu.innerHTML= "";
            displayRamens(); //removes image from menu and reloads the remaining images

            //resets details
            document.getElementById("ramen-image").src = "";
            document.getElementById("ramen-name").textContent = "";
            document.getElementById("ramen-restaurant").textContent = "";
            document.getElementById("ramen-rating").value = "";
            document.getElementById("ramen-comment").textContent = "";
        }
    });
}
*/