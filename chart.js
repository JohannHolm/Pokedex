function createChart() {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: baseStatName,
      datasets: [
        {
          label: 'Top Stats',
          data: baseStat,
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  });
}
