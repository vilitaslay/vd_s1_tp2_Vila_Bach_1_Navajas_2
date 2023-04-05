d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    height: 500,
    width: 1200,
    grid: true,
    marks: [
      Plot.line(data, Plot.groupX({y : 'count'}, {
        x:'anio_mision', 
        y : 'nombre', 
        z : 'ocupacion', 
        stroke: 'ocupacion',
        strokeWidth: 3,
        curve: 'natural', 
        })), 
        Plot.dot(data, Plot.groupX({y : 'count'}, {
          x:'anio_mision', 
          y : 'nombre', 
          z : 'ocupacion', 
          stroke: 'ocupacion',
          strokeWidth: 3,
          })), 
    ],
    
    x: {
      label : 'Año',
      labelOffset : 30,
      tickFormat: 'i',
    },
    y: { 
      zero: true, 
      label : 'frecuencia',
      labelOffset : 30, 
    },
    line: true,
    color:{
      scheme: 'set2',
      legend: true,
    },
    style :{
      background: 'rgb(250, 250, 250)',
    }
  })
  d3.select('#chart').append(() => chart)
})