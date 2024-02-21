import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-5">
      <div className="container flex mx-auto justify-between item-center">
        <Link className="text-3xl font-bold tracking-tight text-orange-500" to="/">
          Gnama
        </Link>
      </div>
    </div>
  );
}
