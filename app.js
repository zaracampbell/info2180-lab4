document.getElementById("search").addEventListener("click", function () {
    const query = document.getElementById("query").value.trim(); // Get user input
    const xhr = new XMLHttpRequest(); // Create AJAX request

    

    xhr.open("GET", url, true); // Set up the GET request to superheroes.php
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById("result").innerHTML = xhr.responseText; // Display result
        } else {
            document.getElementById("result").innerHTML = "An error occurred. Please try again."; // Error handling
        }
    };
    xhr.send(); // Send the request to the server
});
