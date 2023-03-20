d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
        marks: [
            Plot.dot(data, {
                x: 'genero',
                y: 'edad_mision',
                r : 'mision_hs',
                fill : 'genero',
                fillOpacity : 0.5,
            })
        ],
        grid: true,
        color : {
            scheme: 'set1',
            legend : true,
        }
    })

    d3.select('#chart').append(() => chart)
})