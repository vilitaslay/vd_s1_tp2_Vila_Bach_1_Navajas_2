d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    width : 800,
    height : 400,
    margin : 60,
    marks: [
      Plot.line(data, {
        x: 'edad_mision',
        y: 'nacionalidad',
        z: 'nombre',
        stroke: 'status',
        strokeWidth: 8,
        opacity: 0.5,
      }),
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