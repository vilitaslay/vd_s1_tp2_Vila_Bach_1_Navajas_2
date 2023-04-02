d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
        inset: 20,
        margin: 40,
        grid:true,
        height: 500,
        width: 1000,
        marks: [
            Plot.line(data, Plot.groupX({y : 'mean'}, {
                x: 'anio_mision',
                y: 'edad_mision',
                z: 'genero',
                stroke: 'genero',
                strokeWidth: 3,
            })),
            Plot.dot(data, Plot.groupX({y : 'mean'}, {
                x: 'anio_mision',
                y: 'edad_mision',
                z: 'genero',
                stroke: 'genero',
                strokeWidth: 5,
            })),
            Plot.text(data, Plot.groupX({y : 'mean'}, {
                x: 'anio_mision',
                y: 'edad_mision',
                z: 'genero',
                text: ['Mujeres'],
                fill: '#66c2a5', 
                dy: 40,
                dx: 885
            })),
            Plot.text(data, Plot.groupX({y : 'mean'}, {
                x: 'anio_mision',
                y: 'edad_mision',
                z: 'genero',
                text: ['Hombres'],
                fill: '#fc8d62', 
                dy: -80,
                dx: 885,
            })),
        ],
        x : {
            label : 'Año',
            tickFormat: 'i',
            labelOffset: 20,
        },
        y : {
            label : 'Promedio de edad',
            labelOffset: 20,
        },
        color : {
            type: 'categorical',
            scheme: "set2",
        },
        style : {
            background: 'rgb(250, 250, 250)',
        }
    })

    d3.select('#chart').append(() => chart)
})