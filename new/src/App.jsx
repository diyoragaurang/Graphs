import React from "react";
import "./App.css";
import SimpleLineChart from "./charts/SimpleLineChart";
import TinyLineChart from "./charts/TinyLineChart";
import DashedLineChart from "./charts/DashedLineChart"
function App() {
  return (
    <>
      <div>
        <h1>Recharts</h1>
        <SimpleLineChart />
        <TinyLineChart />
        <DashedLineChart/>
      </div>
    </>
  );
}

export default App;
