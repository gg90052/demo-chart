import { useState } from "react";
import StackChart from "./StackChart";
import { yearData, monthData, seasonData } from "./chartData";
import InAndOutDetail from "./InAndOutDetail";
function InAndOut() {
  const [stackData, setStackData] = useState(monthData);
  const [type, setType] = useState("month");
  function changeStackData(stackType) {
    setType(stackType);
    if (stackType === "month") setStackData(monthData);
    if (stackType === "season") setStackData(seasonData);
    if (stackType === "year") setStackData(yearData);
  }
  return (
    <div className="w-[1200px] mx-auto">
      <div className="relative">
        <ul className="absolute top-10 flex left-1/2 gap-5 z-10">
          <li
            className={`cursor-pointer ${
              type === "month" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => changeStackData("month")}
          >
            月
          </li>
          <li
            className={`cursor-pointer ${
              type === "season" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => changeStackData("season")}
          >
            季
          </li>
          <li
            className={`cursor-pointer ${
              type === "year" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => changeStackData("year")}
          >
            年
          </li>
        </ul>
        <div className="w-full h-[50dvh]">
          <StackChart data={stackData} />
        </div>
        <InAndOutDetail />
      </div>
    </div>
  );
}

export default InAndOut;
