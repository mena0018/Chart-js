import { useContext } from "react";
import BarChart from "../AllChart/BarChart";
import LineChart from "../AllChart/LineChart";
import { DashboardContext } from "../../Context/DashboardContext";
import "./DashboardFinance.css";


export default function DashbordFinance() {

  const {changeYear, dataChart, yearData} = useContext(DashboardContext)


  return (
    <div className="global-container">
      <h1>Les résultats de l'année : {yearData}</h1>

      <form>
        <label htmlFor="year">Choisissez une date</label>
        <select id="year" onChange={(el) => changeYear(el) }>
          <option selected={yearData === "2022" && "selected"} value="2022">2022</option>
          <option selected={yearData === "2021" && "selected"} value="2021">2021</option>
          <option selected={yearData === "2020" && "selected"} value="2020">2020</option>
          <option selected={yearData === "2019" && "selected"} value="2019">2019</option>
        </select>
      </form>

      <div className="dashboard-container">
          <BarChart data={dataChart.chart1} name={"Chiffres bimestriels"}/>

          <LineChart data={dataChart.chart2} name="Nombre d'abonnées (en milliers)" />
          <LineChart data={dataChart.chart3} name="Nombre de clients (en milliers)" />

          <BarChart data={dataChart.chart4} name={"Budget marketing"}/>
      </div>
    </div>
  );
}
