// Toggle between Filter and Add New Article forms
function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
    document.getElementById("newContent").style.display = "flex";
    document.getElementById("filterContent").style.display = "none";
}

// Filter articles based on checkboxes
function filterArticles() {
    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;

    let articles = document.querySelectorAll("article");

    articles.forEach(function(article) {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        } else if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        } else if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}

// Add new article to the list
function addNewArticle() {
    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;

    // Get selected radio button
    let articleType = "";
    if (document.getElementById("opinionRadio").checked) {
        articleType = "opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        articleType = "recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        articleType = "update";
    }

    if (title === "" || text === "" || articleType === "") {
        alert("Please fill in all fields and select an article type.");
        return;
    }

    // Create the marker label
    let markerLabel = "";
    if (articleType === "opinion") markerLabel = "Opinion";
    else if (articleType === "recipe") markerLabel = "Recipe";
    else if (articleType === "update") markerLabel = "Update";

    // Build new article element
    let newArticle = document.createElement("article");
    newArticle.classList.add(articleType);

    newArticle.innerHTML = `
        <span class="marker">${markerLabel}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;

    // Add to article list
    document.getElementById("articleList").appendChild(newArticle);

    // Clear the form
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;
}
