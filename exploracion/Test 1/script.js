 d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
        marks: [
            Plot.dot(data, {
                x: 'ocupacion',
                y: 'edad_mision',
                r : 'mision_hs',
                fill : 'genero',
                fillOpacity : 0.5,
            })
        ],
        color : {
            scheme: 'dark2',
            legend : true,
        }
    })

    d3.select('#chart').append(() => chart)
})