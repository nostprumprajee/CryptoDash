import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

function Dashboard({ price, data,pair }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <h2>please select a currency pair</h2>;
  }
  return (
    <div className="dashboard">
      {/* <h2>{`$${pair}`}</h2> */}
      <h2>{`$${pair}`} : {`$${price}`}</h2>

      <div className="chart-container">
        <Line data={data} options={opts} />
      </div>
    </div>
  );
}

export default Dashboard;