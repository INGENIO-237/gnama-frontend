import apps from "../assets/landing.png";
import download from "../assets/appDownload.png";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Search Bar Card */}
      <div className="bg-white rounded-lg flex flex-col shadow-md py-8 gap-5 text-center -mt-16">
        <h1 className="font-bold text-orange-600 text-5xl tracking-tight">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>

      {/* App download */}
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center">
          <img src={apps} alt="App preview" />
        </div>
        <div className="flex flex-col items-center text-center justify-center space-y-4">
          <h1 className="font-bold text-2xl">Order Take away even faster!</h1>
          <span>
            Download the Gnama App for faster ordering and personalized
            recommendations
          </span>
          <img src={download} alt="Apps download buttons" />
        </div>
      </div>
    </div>
  );
}
