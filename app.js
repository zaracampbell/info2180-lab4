document.getElementById("search").addEventListener("click", function () {
    // Make an AJAX call
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "superheroes.php", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert(xhr.responseText); // Show the superheroes in an alert
        } else {
            alert("An error occurred while fetching superheroes.");
        }
    };
    xhr.send();
});

