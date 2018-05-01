import chart from 'svg-ssr'

const renderSensor = function () {
  let config = {
    id: 'chart_' + new Date().getTime(), // whatever
    debug: false, // if you want log time in terminal you can set it to true
    box: {
      width: 100, // not valid in pie chart
      height: 100 // not valid in pie chart
    }
  }
  let chartSVGCode = chart.bar(
    {
      series: [
        {
          data: [
            {
              xValue: 'Set/17',
              yValue: 58.3
            },
            {
              xValue: 'Out/17',
              yValue: 60.3
            },
            {
              xValue: 'Nov/17',
              yValue: 75.3
            },
            {
              xValue: 'Dez/17',
              yValue: 70.7
            },
            {
              xValue: 'Jan/18',
              yValue: 68.0
            }
          ]
        }
      ],
      xAxis: {
        type: 'category',
        data: ['Set/17', 'Out/17', 'Nov/17', 'Dez/17', 'Jan/18']
      },
      yAxis: {
        type: 'linear',
        data: [100, 35],
        unit: '%' // not required
      }
    },
    [config]
  )
  return chartSVGCode
}

const renderNode = function () {
  let config = {
    id: 'chart_' + new Date().getTime(), // whatever
    debug: false, // if you want log time in terminal you can set it to true
    box: {
      width: 100, // not valid in pie chart
      height: 100 // not valid in pie chart
    }
  }
  let chartSVGCode = chart.bar(
    {
      series: [
        {
          data: [
            {
              xValue: '00:00',
              yValue: 100
            },
            {
              xValue: '05:00',
              yValue: 76.5
            },
            {
              xValue: '10:00',
              yValue: 52.4
            },
            {
              xValue: '15:00',
              yValue: 30.7
            },
            {
              xValue: '20:00',
              yValue: 15.0
            }
          ]
        }
      ],
      xAxis: {
        type: 'category',
        data: ['00:00', '05:00', '10:00', '15:00', '20:00']
      },
      yAxis: {
        type: 'linear',
        data: [100, 35],
        unit: '%' // not required
      }
    },
    [config]
  )
  return chartSVGCode
}

export {renderSensor, renderNode}
