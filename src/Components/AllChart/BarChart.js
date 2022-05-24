import { Bar } from "react-chartjs-2";


export default function BarChart({ data, name }) {
  
  return (
    <div className="chart-container">
      <Bar
        redraw={true}
        data={{
          labels: [
            "Jan/Fev",
            "Mar/Avr",
            "Mai/Ju",
            "Jui/Août",
            "Sep/Oct",
            "Nov/Dev",
          ],
          datasets: [
            {
              label: name,
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
                "rgba(255, 159, 64, 0.8)",
              ],
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 20,
                },
              },
            ],
          },
          // suppression de la box a cote du titre
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        }}
      />
    </div>
  );
}
