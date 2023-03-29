d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    width : 800,
    height : 400,
    marks: [
      Plot.line(data, Plot.groupX({y : 'count'}, {
        x:'anio_mision', 
        y : 'nombre', 
        z : 'ocupacion', 
        stroke: 'ocupacion', 
        curve : 'natural',
    })), 
    ],
    
    x: {
      label : 'Edad',
      labelOffset : 50,
    },
    y: { 
      zero: true, 
      label : 'Nacionalidad', 
      labelOffset : 50, 
    },
    line: true,
    color:{
      scheme: 'set1',
      legend: true,
    },
  })
  d3.select('#chart').append(() => chart)
})