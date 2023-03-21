 d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
      width : 1100,
      height : 600,
      grid : true,
      padding : 0.5,
      margin : 50,
        marks: [
            Plot.barY(data, {
              x: 'nacionalidad',
              y: 'mision_hs',
              fill : 'nacionalidad',
              stroke : 'nacionalidad',
        })
        ],
        x : {
          label : 'Nacion',
          labelOffset : 40,
        },

        y : {
          label : 'Total Horas en Misiones',
        },

        color : {
          type : 'categorical',
          scheme : 'Spectral',
          legend : true,
        }
    })
    d3.select('#chart').append(() => chart)
})