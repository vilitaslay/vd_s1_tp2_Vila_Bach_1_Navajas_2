d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'anio_mision',
        y: 'mision_hs',
        r: 'mision_hs',
        opacity: 0.8,
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      scheme : '',
      legend: true,
    },
  })

  /* Agrega el chart al DOM */
  d3.select('#chart').append(() => chart)
})

