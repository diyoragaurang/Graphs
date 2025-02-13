import React from "react";
import "./App.css";
import SimpleLineChart from "./charts/SimpleLineChart";
import TinyLineChart from "./charts/TinyLineChart";
import DashedLineChart from "./charts/DashedLineChart"
import CustomizedDotLineChart from "./charts/CustomizedDotLineChart"
function App() {
  return (
    <>
      <div>
        <h1>Recharts</h1>
        <SimpleLineChart />
        <TinyLineChart />
        <DashedLineChart/>
        <CustomizedDotLineChart/>
      </div>
    </>
  );
}

export default App;
