document.getElementById("search").addEventListener("click", function () {
    const query = document.getElementById("query").value.trim(); // Get user input
    const xhr = new XMLHttpRequest(); // Create AJAX request

    // Build the URL for the request (empty query returns full list)
    const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : "superheroes.php";

    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById("result").innerHTML = xhr.responseText; // Show results
        } else {
            document.getElementById("result").innerHTML = "An error occurred. Please try again."; // Handle error
        }
    };
    xhr.send(); // Send the request
});
