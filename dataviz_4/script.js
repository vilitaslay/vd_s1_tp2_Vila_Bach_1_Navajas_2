
let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'status',
        y: 'mision_hs',
        fill: 'status',
        // fill: 'status',
        // fillOpacity: 0.6,
        // r: 'mision_hs',
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 800,
    height: 400,
    margin : 50,
    facet: {
      data: data,
      x: 'ocupacion',
    },
    x : {
      label : null,
    },
    y : {
      label : 'Horas de Misión'
    },
    color : {
      scheme : 'paired',
    }
  })
  d3.select('#chart').append(() => chart)
})