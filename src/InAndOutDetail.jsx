import Institution from "./Institution";

function InAndOutDetail() {
  return (
    <div className="w-full flex-col align-middle">
      <div className="flex gap-4 justify-center items-center my-4">
        <p>112-12合計</p>
        <div className="flex flex-col border-l-2 border-gray-500 pl-4">
          <p>
            應收 <span className="inline-block w-28 text-right">5,060,032</span>{" "}
            (未收
            <span className="inline-block w-20 text-right">340,012</span>)
          </p>
          <p>
            應付 <span className="inline-block w-28 text-right">156,000</span>{" "}
            (未付
            <span className="inline-block w-20 text-right">65,768</span>)
          </p>
        </div>
        <div>餘額404,032</div>
      </div>
      <div className="flex w-full flex-wrap gap-4 px-4 justify-center">
        <Institution />
        <Institution />
        <Institution />
        <Institution />
      </div>
    </div>
  );
}

export default InAndOutDetail;
