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
    for (element of data) {
        const row = table.insertRow();
        const titleCell = row.insertCell();
        const episodeCell = row.insertCell();
        const releaseCell = row.insertCell();
        titleCell.innerText = element.title;
        episodeCell.innerText = element.episode_id;
        releaseCell.innerText = element.release_date;
    }
}
