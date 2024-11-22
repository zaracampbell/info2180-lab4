document.getElementById('my-button').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php', true);


    xhr.onload = function(){
        if(xhr.status === 200){
            if('search-input' === ''){

            
            document.getElementById('result-content').innerHTML = xhr.responseText;
        } else{
            for (i =0; i< sizeof($superheroes); i++){
                if ('search-input' === $superheroes[i]){
                    print(superheroes[i]);

                }else{
                    document.getElementById('result-content').innerHTML = xhr.responseText;
                }
            }
        }
            
        }else{
            document.getElementById('result-content').innerHTML = 'Error fetching data';
        }
    };


    xhr.onerror = function(){
        document.getElementById('result-content').innerHTML = 'Request Failed';
    };

    xhr.send();
});
    
 
