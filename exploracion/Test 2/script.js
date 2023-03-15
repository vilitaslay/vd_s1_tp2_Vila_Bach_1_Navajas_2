 d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
      width : 1000,
      grid : true,
      padding : 0.5,
        marks: [
            Plot.barX(data, {
              x: 'edad_mision',
              y: 'nacionalidad',
              fill : 'nacionalidad',
              fillOpacity : 0.5,
        })
        ]
    })
    d3.select('#chart').append(() => chart)
})