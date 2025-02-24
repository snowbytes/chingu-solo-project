import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <h1>Exercise Planner</h1>
      </Link>
    </header>
  );
}
