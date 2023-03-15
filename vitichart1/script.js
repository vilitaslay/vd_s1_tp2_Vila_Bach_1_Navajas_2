d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.barX(data, {
          x: 'anio_nacimiento',
          y: 'nacionalidad',
          opacity:0.5,
        }),
      ],
      color:{
        legend: true,
      },
    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
  })
  