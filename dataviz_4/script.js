
let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.cell(data, Plot.group({fill : 'count'}, {
        x: 'anio_nacimiento',
        y: 'anio_mision',
        fill: 'nombre',
      })),
    ],
    grid: true,
    nice: true,
    zero: true,
    height: 500,
    width: 1000,
    margin : 50,
    x : {
      label : null,
      tickFormat: 'i',
    },
    y : {
      label : null,
      labelOffset: 20,
      tickFormat: 'i',
    },
    color : {
      scheme: 'greens',
      nice: true,
      legend: "ramp",
    },
    style : {
      background: 'rgb(250, 250, 250)',
  }
  })
  d3.select('#chart').append(() => chart)
})