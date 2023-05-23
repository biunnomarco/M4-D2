

function search() {
    let searchValue = document.getElementById("searchField").value.toLowerCase();
    let artist = document.getElementById(searchValue);
    let artistReset = document.getElementsByClassName("artist");
    async function logJSONData() {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue);
        const jsonData = await response.json();
        console.log(jsonData);

        //*Artist Reset
        for (const art of artistReset) {
            art.classList.add("d-none");
        }

        //*Artist visibility
        artist.classList.remove("d-none");

        let section = document.getElementById(searchValue + "Section");
        
        //* ciclo che crea ed innietta gli elementi del json nel dom
        for (let i = 0; i < jsonData.data.length; i++) {
            let card = document.createElement("div");
            let infoTitle = document.createElement("p");
            let infoName = document.createElement("p");
            let imgArtist = document.createElement("img");

            infoTitle.innerText = jsonData.data[i].album.title;
            infoName.innerText = jsonData.data[i].title_short;

            imgArtist.classList.add("p-1");
            imgArtist.src = jsonData.data[i].album.cover_medium;

            section.appendChild(card);
            card.appendChild(imgArtist);
            card.appendChild(infoTitle);
            card.appendChild(infoName);
        }
      }
      logJSONData()
}


