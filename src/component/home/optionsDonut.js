const optionsDonut = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: "donut",
    },
    // legend: {
    //     show: true,
    //     showForSingleSeries: false,
    //     showForNullSeries: true,
    //     showForZeroSeries: true,
    //     position: 'right',
    //     horizontalAlign: 'center', 
    //     floating: false,
    //     fontSize: '14px',
    //     fontFamily: 'Helvetica, Arial',
    //     fontWeight: 400,
    //     formatter: undefined,
    //     inverseOrder: false,
    //     width: undefined,
    //     height: undefined,
    //     tooltipHoverFormatter: undefined,
    //     customLegendItems: [],
    //     offsetX: 0,
    //     offsetY: 0,
    //     labels: {
    //         colors: undefined,
    //         useSeriesColors: false
    //     },
    //     markers: {
    //         width: 12,
    //         height: 12,
    //         strokeWidth: 0,
    //         strokeColor: '#fff',
    //         fillColors: undefined,
    //         radius: 12,
    //         customHTML: undefined,
    //         onClick: undefined,
    //         offsetX: 0,
    //         offsetY: 0
    //     },
    //     itemMargin: {
    //         horizontal: 5,
    //         vertical: 0
    //     },
    //     onItemClick: {
    //         toggleDataSeries: true
    //     },
    //     onItemHover: {
    //         highlightDataSeries: true
    //     },
    // },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
              show:false,
            position: "bottom",
          },
        },
      },
    ],
  };
  export {optionsDonut};