d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'ocupacion',
        y: 'anio_nacimiento',
        r: 'mision_hs',
        fill: 'genero',
        opacity:0.5
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
  })

  /* Agrega el chart al DOM */
  d3.select('#chart').append(() => chart)
})

