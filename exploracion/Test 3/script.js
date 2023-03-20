 d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
        height: 600,
        width: 600,
        marks: [
            Plot.barY(data, {
                x: 'edad_mision',
                y: 'mision_hs',
            })
        ],
        color: {
            scheme: 'dark2',
        }
    })
    d3.select('#chart').append(() => chart)
})

    