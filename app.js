document.getElementById("search").addEventListener("click", function () {
    const query = document.getElementById("query").value.trim(); // Get the user's input
    const xhr = new XMLHttpRequest(); // Create an AJAX request
    const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : "superheroes.php"; // Add query parameter if needed

    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById("result").innerHTML = xhr.responseText; // Show result in the "result" div
        } else {
            document.getElementById("result").innerHTML = "An error occurred. Please try again.";
        }
    };
    xhr.send(); // Send the request
});
