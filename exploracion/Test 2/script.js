 d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
        height: 640,
        padding: 0.05,
        grid: true,
        x: {
          axis: "top",
          label: "Hrs Mision"
        },
        y: {
          label: "Edad"
        },
        color: {
          type: "linear",
          scheme: "PiYG"
        },
        marks: [
            Plot.cell(data, {
                
            }),
        ],
    })
    d3.select('#chart').append(() => chart)
})