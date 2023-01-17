import Clock from "./Clock";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
      <Clock cityKey={"stockholm"} />
      <Clock cityKey={"london"} />
    </div>
  );
}
