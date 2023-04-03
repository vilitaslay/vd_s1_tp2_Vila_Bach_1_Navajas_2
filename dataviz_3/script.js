d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    height: 500,
    width: 1000,
    marks: [
      Plot.line(data, Plot.groupX({y : 'count'}, {
        x:'anio_mision', 
        y : 'nombre', 
        z : 'ocupacion', 
        stroke: 'ocupacion',
        curve: 'natural', 
        })), 
        Plot.dot(data, Plot.groupX({y : 'count'}, {
          x:'anio_mision', 
          y : 'nombre', 
          z : 'ocupacion', 
          stroke: 'ocupacion',
          strokeWidth: 6,
          })), 
    ],
    
    x: {
      label : 'Año',
      labelOffset : 50,
      tickFormat: 'i',
    },
    y: { 
      zero: true, 
      label : 'frecuencia',
      labelOffset : 30, 
    },
    line: true,
    color:{
      scheme: 'set1',
      legend: true,
    },
    style :{
      background: 'rgb(250, 250, 250)',
    }
  })
  d3.select('#chart').append(() => chart)
})