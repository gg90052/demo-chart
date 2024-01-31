import RadialChart from "./RadialChart";

function Institution() {
  return (
    <div className="rounded-lg border px-8 py-5 min-w-[430px]">
      <div className="flex gap-4 border-b pb-4">
        <p className="font-bold flex-shrink-0">連城居家</p>
        <p className="grow pl-4 border-l-2">預計結餘 404,032</p>
        <div className="w-6 h-6 rounded-full border"></div>
        <div className="w-6 h-6 rounded-full border"></div>
      </div>
      <div className="flex mt-7 items-stretch gap-4">
        <div className="flex grow shrink-0 justify-center">
          <div className="flex flex-col gap-1">
            <p>未收 340,012</p>
            <hr />
            <p>收入 560,032</p>
          </div>
          <div className="w-16 h-16">
            <RadialChart
              data={{
                value: 340012,
                all: 560032,
              }}
            />
          </div>
        </div>
        <div className="w-[1px] bg-black"></div>
        <div className="flex grow shrink-0 justify-center">
          <div className="flex flex-col gap-1">
            <p>未付 65,768</p>
            <hr />
            <p>支出 156,000</p>
          </div>
          <div className="w-16 h-16">
            <RadialChart
              fill="#FF8042"
              data={{
                value: 65768,
                all: 156000,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Institution;
