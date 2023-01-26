const ctx = document.getElementById("chart");
const names = ["nada", "hola", "aaaaaa"];
const ages = [12, 23, 34];

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: names,
    datasets: [
      {
        label: "Edad",
        data: ages,
        backgroundColor: [
          "rgba(54,162,235,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(54,162,235,0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(255,99,132,1)",
          "rgba(255,99,132,1)",
          "rgba(255,99,132,1)",
          "rgba(255,99,132,1)",
          "rgba(255,99,132,1)",
        ],
        borderWidth: 1.5,
      },
    ],
  },
});
