document.getElementById("search").addEventListener("click", function () {
    const query = document.getElementById("query").value.trim();
    const xhr = new XMLHttpRequest();
    const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : "superheroes.php";

    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById("result").innerHTML = xhr.responseText;
        } else {
            document.getElementById("result").innerHTML = "An error occurred while fetching superheroes.";
        }
    };
    xhr.send();
});
