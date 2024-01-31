import InAndOut from "./InAndOut";
import RadialChart from "./RadialChart";

function App() {
  return (
    <>
      <InAndOut />
      {/* <div style={{ width: "100vw", height: "50dvh", display: "flex" }}>
        <div style={{ width: "300px" }}>
          <RadialChart
            data={{
              name: "收入",
              value: 1836,
              all: 3842,
            }}
          />
        </div>
        <div style={{ width: "300px" }}>
          <RadialChart
            data={{
              name: "支出",
              value: 2006,
              all: 8842,
            }}
          />
        </div>
      </div> */}
    </>
  );
}

export default App;
