document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
        // ... Your recipe data here ...
        {
            "name": "Veggie Delight",
            "imageSrc": "https://plus.unsplash.com/premium_photo-1671559021919-19d9610c8cad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZ2llJTIwc2FuZHdpY2h8ZW58MHx8MHx8fDA%3D",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=bNB4DzaPffg-88nLpiW-afRgsxhQuKX8ZkdWvaVGQPQ=",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://images.unsplash.com/photo-1709392975966-6e76d0452436?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://media.istockphoto.com/id/155100060/photo/ribeye-steak-on-grill-with-fire.webp?a=1&b=1&s=612x612&w=0&k=20&c=2ujKmuDr2d9Xuvvs9Yy0-gxUYLNTtAJat9m3OjXREQk=",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://images.unsplash.com/photo-1707576517985-a2e912cca325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMHNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://media.istockphoto.com/id/488960908/photo/homemade-pasta.webp?a=1&b=1&s=612x612&w=0&k=20&c=FDKNoLHZzva4MXWLDadMlrI6z_lpiPqKBaekKmz7JMo=",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://plus.unsplash.com/premium_photo-1712756242822-3b714247991a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZlZ2FuJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://media.istockphoto.com/id/1358255095/photo/crispy-fried-chicken.webp?a=1&b=1&s=612x612&w=0&k=20&c=EsW5ksesFhMNVJcuq7V2j3Jtz35x40iCrc4XY08lQOE=",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://media.istockphoto.com/id/1368433094/photo/risotto-with-mushrooms-cheese-and-thyme-vegetarian-food-italian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tu5V6fbiXwSNtL2C7C1v1o3gqLAUJ-mxZpWsQTMtNI4=",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://media.istockphoto.com/id/1041137232/photo/100-gluten-free-low-carb-hamburger-and-bun.webp?a=1&b=1&s=612x612&w=0&k=20&c=gCgJvIjWWEFrshmafhiw4pUGvI72TaJyJAuoDlm9_Kc=",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://images.unsplash.com/photo-1680919502568-bc69dd26427d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmJxJTIwcmlic3xlbnwwfHwwfHx8MA%3D%3D",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://media.istockphoto.com/id/1199607353/photo/fresh-chicken-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=jfb5jwlTURfywWZ_bQk5l16Wd4P7ZHP5ZQyDYL4QGmg=",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://media.istockphoto.com/id/669793064/photo/grilled-shrimp-tacos.webp?a=1&b=1&s=612x612&w=0&k=20&c=H4lA-rtwt99K0nSMq0ProYCw1R2GaUMzSXxhA0-ETEs=",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://images.unsplash.com/photo-1586985289906-406988974504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    ];

    const recipeContainer = document.getElementById("recipeContainer");
    const openDrawerButton = document.getElementById("openDrawerButton");
    const closeDrawerButton = document.getElementById("closeDrawerButton");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const nav = document.querySelector("nav");

    // Function to open the mobile drawer
    function openDrawer() {
        mobileDrawer.style.left = "0";
    }

    // Function to close the mobile drawer
    function closeDrawer() {
        mobileDrawer.style.left = "-80%"; // Hide the drawer
    }

    // Event listener for opening the drawer
    openDrawerButton.addEventListener("click", openDrawer);

    // Event listener for closing the drawer
    closeDrawerButton.addEventListener("click", closeDrawer);

    // Function to create a recipe card with specified elements
    function createRecipeCard(recipe) {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        // Create HTML structure for the recipe card
        recipeCard.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-details">
                <p class="recipe-type">${recipe.type === 'veg' ? 'Veg' : 'Non-Veg'}</p>
                <div class="recipe-name-rating">
                    <h1 class="recipe-name">${recipe.name}</h1>
                    <div class="recipe-rating">
                        <p><span class="star-icon">★</span> ${recipe.rating}</p>
                    </div>
                </div>
                <div class="recipe-time-action">
                <p class="recipe-time">${recipe.time}</p>
                <div class="recipe-actions">
                <i class="material-icons like-button">${recipe.isLiked ? "favorite" : "favorite_border"}</i>
                    <i class="material-icons chat">chat</i>
                </div>
                </div>
            </div>
        `;

        // Add an event listener to the like button to toggle isLiked property
        const likeButton = recipeCard.querySelector(".like-button");
        likeButton.addEventListener("click", () => {
            recipe.isLiked = !recipe.isLiked;
            likeButton.textContent = recipe.isLiked ? "favorite" : "favorite_border";
        });

        recipeContainer.appendChild(recipeCard);
    }

    // Function to display recipes
    function displayRecipes(recipesToDisplay) {
        recipeContainer.innerHTML = "";
        recipesToDisplay.forEach((recipe) => {
            createRecipeCard(recipe);
        });
    }

    // Initial display of all recipes
    displayRecipes(recipes);

    // Search functionality
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    // Filter by recipe type functionality
    const allRecipes = document.getElementById("AllRecipes");
    const vegRecipes = document.getElementById("VegRecipes");
    const nonVegRecipes = document.getElementById("NonVegRecipes");

    allRecipes.addEventListener("click", () => {
        displayRecipes(recipes);
    });

    vegRecipes.addEventListener("click", () => {
        const vegRecipes = recipes.filter((recipe) => recipe.type === "veg");
        displayRecipes(vegRecipes);
    });

    nonVegRecipes.addEventListener("click", () => {
        const nonVegRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
        displayRecipes(nonVegRecipes);
    });

    // Rating filter functionality
    const ratingFilterAbove = document.getElementById("ratingFilterAbove");
    const ratingFilterBelow = document.getElementById("ratingFilterBelow");

    function filterByRating(rating, isAbove) {
        const filteredRecipes = isAbove
            ? recipes.filter((recipe) => recipe.rating >= rating)
            : recipes.filter((recipe) => recipe.rating < rating);
        displayRecipes(filteredRecipes);
    }

    ratingFilterAbove.addEventListener("click", () => {
        filterByRating(4.0, true);
    });

    ratingFilterBelow.addEventListener("click", () => {
        filterByRating(4.0, false);
    });

    // Mobile drawer functionality
    openDrawerButton.addEventListener("click", () => {
        mobileDrawer.style.display = "block";
    });

    closeDrawerButton.addEventListener("click", () => {
        mobileDrawer.style.display = "none";
    });

    // Toggle menu icon for screens with width 786px or less
    function toggleMenuIcon() {
        if (window.innerWidth <= 786) {
            nav.style.display = "none"; // Hide the navigation bar
            openDrawerButton.style.display = "block"; // Show the menu icon
        } else {
            nav.style.display = "flex"; // Display the navigation bar
            openDrawerButton.style.display = "none"; // Hide the menu icon
            mobileDrawer.style.display = "none"; // Hide the mobile drawer
        }
    }

    // Initial check and event listener for screen width
    toggleMenuIcon();
    window.addEventListener("resize", toggleMenuIcon);
});