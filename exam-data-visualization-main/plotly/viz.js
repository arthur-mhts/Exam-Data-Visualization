fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    // Trier les données par ordre décroissant de la population
    data.sort((a, b) => b.population - a.population);

    // Sélectionner les 30 premiers pays
    const top30 = data.slice(0, 30);

    // Ordonner les pays par ordre croissant de population

    const top30_reversed = top30.reverse();
    // Créer les traces de l'histogramme
    const traces = top30_reversed.map(country => ({
        x: [country.country],
        y: [country.population],
        type: 'bar',
        marker: {
            color: 'rgb(55, 128, 191)',
            line: {
                color: 'rgb(55, 128, 191)',
                width: 1.5
            }
        },
        name: country.country // Cela nous permet d'isoler les pays pour les comparer
    }));

    // Définir le layout de l'histogramme
    const layout = {
        title: 'Data distribution of the countries population',
        xaxis: {
            title: 'Country',
            tickmode: 'array',
            tickvals: top30_reversed.map(country => country.country),
            ticktext: top30_reversed.map(country => country.country)
        },
        yaxis: {
            title: 'Population',
            
        },
        barmode: 'stack',
        bargap: 0.15,
        bargroupgap: 0.1
    };

    Plotly.newPlot('data-viz', traces, layout);
}
    
function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}