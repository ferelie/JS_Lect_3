let starWarsData = {};
(async function () {
    try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        starWarsData = data;
        displayData(starWarsData.results);
    } catch (error) {
        console.error(error);
    }
})();

function displayData(data) {
    const table = document.querySelector("table");
    for (let i = 0; i < data.length; i++) {
        const row = table.insertRow();
        const titleCell = row.insertCell();
        const episodeCell = row.insertCell();
        const releaseCell = row.insertCell();
        titleCell.innerHTML = data[i].title;
        episodeCell.innerHTML = data[i].episode_id;
        releaseCell.innerHTML = data[i].release_date;
    }
}
