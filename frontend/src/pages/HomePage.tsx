import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-4 text-center -mt-16">
        <h1 className="text-4xl font-bold tracking-tight   text-orange-700">
          Hungry? Grab Your Meal 😋
        </h1>
        <span>
         
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-7">
        <img className="py-2" src={landingImage} />

        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            FASTEST DELIVERY 🚀
          </span>
          <span>Download Zwigato for fast and personalise delivery</span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
