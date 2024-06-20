import React from "react";
import ChartTwo from "../Charts/ChartTwo";
import ChartThree from "../Charts/ChartThree";
import Calendar from "../Calendar/Calendar";
import Table from "../Table/Table";

function Activity() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 overflow-hidden py-2">
        <div className="sm:w-full">
          <ChartTwo />
        </div>
        <div className="sm:w-1/2">
          <Calendar />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 overflow-hidden py-2">
        <div className="sm:w-1/3">
          <ChartThree />
        </div>
        <div className="sm:w-1/3">
          <ChartTwo />
        </div>
      </div>
      <Table />
    </>
  );
}

export default Activity;
