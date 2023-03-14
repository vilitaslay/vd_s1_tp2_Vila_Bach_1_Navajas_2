 d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
        marks: [
            Plot.barY(data, {
                x: 'eva_mision_hs'
            }),
        ],
    })

    d3.select('#chart').append(() => chart)
})