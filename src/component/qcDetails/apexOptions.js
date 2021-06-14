const apexOptions = {
  series: [70],
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%",
      },
    },
  },
  labels: ["QC score"],
};

export { apexOptions };
