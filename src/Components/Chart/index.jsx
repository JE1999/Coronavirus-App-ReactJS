import React, { memo } from 'react'
import { Bar } from 'react-chartjs-2'
import numeral from 'numeral'

export const Chart = memo(({countrySelect}) => {

  const chartData = {
    labels: [
      "Totales",
      'Activos', 
      'Muertes', 
      'Recuperados'
    ],
    datasets:[
      {
        data:[
          countrySelect.cases,
          countrySelect.active,
          countrySelect.deaths,
          countrySelect.recovered,
        ],
        backgroundColor:[
          'rgba(20, 40, 67, 0.6)',
          'rgba(250, 116, 79, 0.6)',
          'rgba(200, 25, 18, 0.6)',
          'rgba(1, 86, 104, 0.6)'
        ],
        borderColor: [
          'rgba(20, 40, 67, 1)',
          'rgba(250, 116, 79, 1)',
          'rgba(200, 25, 18, 1)',
          'rgba(1, 86, 104, 1)'
        ],
        borderWidth: 3
      },
    ]
  }
  

  return(
    <>

      <Bar
        data={chartData}
        height={100}
        options={{ 
          title: {
            display: true,
            text: countrySelect.country,
            fontSize: 20
          },
          legend: {
            display: false,
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                return numeral(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]).format('0,0')
              },
            },
          },
          animation: {
            easing: 'easeOutQuart',
            duration: '5000'
          },
          scales: {
            yAxes: [{
              ticks: {
                callback: function(label, index, labels) {
                  return new Intl.NumberFormat('en-US').format(label)
                }
              }
            }]
          }
        }}
      />

    </>
  )

})