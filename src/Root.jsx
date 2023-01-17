import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      {" "}
      <nav className="flex justify-between p-8 bg-blue-400 items-center">
        <h1 className="text-4xl font-extrabold text-white">
          <Link to={"/"}>World Time</Link>
        </h1>

        <ul className="flex space-x-4">
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}
