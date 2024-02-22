import { Link } from "react-router-dom";

export default function Footer() {
  return (
    // <div className="w-full text-white min-h-[150px] bg-orange-500 flex items-center justify-between">
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        <Link className="font-bold text-2xl" to="/">
          Gnama
        </Link>
        <div className="space-x-6">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}
