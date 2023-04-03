 d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    let chart = Plot.plot({
      height: 500,
      width: 1200,
      grid: true,
      padding : 0.5,
      margin : 60,
        marks: [
            Plot.barY(data,  {
              x: 'nacionalidad',
              y: 'mision_hs',
              fill: d => (d.nacionalidad == 'U.S.S.R/Rusia' ? 'rgb(150, 50, 50)' : 'grey'),
              stroke: d => (d.nacionalidad == 'U.S.S.R/Rusia' ? 'rgb(150, 50, 50)' : 'grey'),
              sort : {x: 'y', reverse : true}
        }),
            Plot.text(data, {
              x: 'nacionalidad',
              y: 'mision_hs',
              text: d => (d.nacionalidad == 'U.S.S.R/Rusia' ? (d == 200000 ? '200000': null) : null)
            })

        ],
        x : {
          label : 'Nación',
          labelOffset : 40,
        },
        y : {
          label : 'Total Horas en Misiones',
        },
        style : {
          background: 'rgb(250, 250, 250)',
        }
    })
    d3.select('#chart').append(() => chart)
})