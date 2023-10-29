const ctx = document.getElementById('miGrafico');

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Progreso de IMC',
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const data = {
  labels,
  datasets: [
    {
      label: 'IMC',
      data: [33, 30, 29, 29.4, 28.4, 29.1, 28.7],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },{
      label: 'PESO',
      data: [70, 71, 68, 73.4, 72.4, 74.1, 75.7],
      borderColor: 'rgb(220, 229, 132)',
      backgroundColor: 'rgba(220, 229, 132, 0.5)',
    },
  ],
};

const myChart = new Chart(ctx, {
  type: 'line',
  data,
  options,
});