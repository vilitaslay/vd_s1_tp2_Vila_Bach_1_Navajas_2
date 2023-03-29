d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
        inset: 20,
        margin: 40,
        grid:true,
        marks: [
            Plot.line(data, Plot.groupX({y : 'mean'}, {
                x: 'anio_mision',
                y: 'edad_mision',
                z: 'genero',
                stroke: 'genero',
                strokeWidth: 3,
            })),
        ],
        x : {
            label : 'Año',
            tickFormat: 'i',
            labelOffset: 30
        },
        y : {
            label : 'Promedio de edad',
            labelOffset: 30,
        },
        color : {
            scheme: 'set2',
            legend: true,
        },
        style : {
            background: 'rgb(250, 250, 250)',
        }
    })

    d3.select('#chart').append(() => chart)
})