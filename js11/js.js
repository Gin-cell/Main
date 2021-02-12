let url = "http://www.omdbapi.com/?apikey=57ad683b";
let listPlaceholder = document.querySelector('.table');


function getInputValue(){

    let inputVal = document.getElementById("myInput").value;
    let optionVal = document.getElementById('selector').value;

    seacrhTypeVal = optionVal;
    searchVal = inputVal;
    if (seacrhTypeVal=="") {
        url += '&s='+searchVal;
    } else {
        url += '&s='+searchVal+'&type='+seacrhTypeVal;
    }

    console.log(url);

    listPlaceholder.innerHTML = "";

    fetch(url)
        .then( function(response) {
        return response.json();
    })
    .then(function(list)  {
        let flist = list.Search;
        let films = document.createElement('ul');
        
        if (list.Search == undefined)
        {
            listPlaceholder.append("Movie not found");
        } else {
            for (let i = 0; i < flist.length; i++) {
                let item = document.createElement('li');
                var btn = document.createElement("BUTTON");
                btn.innerHTML = "Details";  
                btn.id = "BTN";
                btn.className = "btn"// Додали клас
                item.innerHTML = flist[i].Title + ' ' + flist[i].Year + ' ';
                
                films.append(item);
                films.append(btn);
                listPlaceholder.append(films);
               
            }
            
        }   
        let btncheck = document.querySelectorAll(".btn");// Маси кнопок з класом btn який додали раніше
        function showComment() {
            console.log("gay")
        }
        for (var i = 0; i < flist.length; i++) {
            btncheck[i].addEventListener('click', showComment);

        }
        
     /*    document.getElementById("BTN").addEventListener("click", details);
                    function details(flist) {
                        for (let i = 0; i < flist.length; i++) {
                            let disc = document.createElement('p');
                            disc.append(JSON.stringify(list[i]));
                        } 
                    } */

         

        url = "http://www.omdbapi.com/?apikey=57ad683b";
    })
    
}

