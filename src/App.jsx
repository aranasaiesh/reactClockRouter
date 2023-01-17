import Clock from "./Clock";

function App() {
  return (
    <div>
      <nav className="flex justify-between p-8 bg-blue-400 items-center">
        <h1 className="text-4xl font-extrabold text-white">World Time</h1>

        <ul className="flex space-x-4">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className="p-8"></main>
    </div>
  );
}

export default App;
