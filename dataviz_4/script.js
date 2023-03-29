
let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.barY(data, Plot.groupX({y : 'count'}, {
        x: 'ocupacion',
        y: 'nombre',
        fill: 'genero'
  })),
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 1100,
    height: 400,
    margin : 50,
    x : {
      label : null,
    },
    y : {
      label : 'Horas de Misión'
    },
    color : {
      scheme : 'dark2',
      legend: true,
    }
  })
  d3.select('#chart').append(() => chart)
})