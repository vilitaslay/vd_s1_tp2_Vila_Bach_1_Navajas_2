d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
        marks: [
            Plot.dot(data, {
                x: 'genero',
                y: 'edad_mision',
                fill : 'genero',
                fillOpacity : 0.5,
                r : 5,
            })
        ],
        x : {
            label : 'Género',
        },
        y : {
            label : 'Edad en la misión',
        },
        grid: true,
        color : {
            scheme: 'set2',
            legend : true,
        }
    })

    d3.select('#chart').append(() => chart)
})