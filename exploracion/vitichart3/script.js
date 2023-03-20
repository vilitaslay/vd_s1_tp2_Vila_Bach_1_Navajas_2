d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(data, {
        x: 'edad_mision',
        y: 'nacionalidad',
        z: 'nombre',
        stroke: 'status',
        strokeWidth: 8,
        opacity: 0.5,
        curve: 'natural',
      }),
    ],
    
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },
    y: { zero: true },
    line: true,
    color:{
      scheme: 'set1',
      legend: true,
    }
  })
  d3.select('#chart').append(() => chart)
})