 d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
        marks: [
            Plot.dot(data, {
                x: 'mision_hs',
                y: 'eva_mision_hs',
                fill : 'genero',
                fillOpacity : 0.6,
            })
        ],
        nice : true,
        color : {
            legend : true,
        }
    })

    d3.select('#chart').append(() => chart)
})