document.getElementById('Search').addEventListener('click', function() {
    var searchQuery = document.getElementById('search-input').value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var superheroes = JSON.parse(xhr.responseText); // Assuming JSON response
            var filteredSuperheroes = superheroes.filter(function(hero) {
                return hero.name.toLowerCase().includes(searchQuery.toLowerCase());
            });

            if (filteredSuperheroes.length > 0) {
                var resultHtml = filteredSuperheroes.map(function(hero) {
                    return '<p>' + hero.name + '</p>';
                }).join('');
                document.getElementById('result-content').innerHTML = resultHtml;
            } else {
                document.getElementById('result-content').innerHTML = 'No matches found.';
            }
        } else {
            document.getElementById('result-content').innerHTML = 'Error fetching data';
        }
    };

    xhr.onerror = function() {
        document.getElementById('result-content').innerHTML = 'Request Failed';
    };

    xhr.send();
});
