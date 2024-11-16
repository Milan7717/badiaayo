import  { useState, useEffect } from "react";
import MapComponent from "../componenets/GalliMap";
import { postToFacebook } from "../api/facebookPost";
import NewsComponent from "../componenets/News";
import WeatherAlert from "../componenets/Weather";

// const AlertForm = () => {
//   return (
//     <div className="bg-white absolute top-[20%] left-[30%] w-[600px] h-[500px]">
//       <p className="text-right pr-3 text-xl">X</p>
//       <h5 className="text-center text-red-800 text-2xl">Alert Form</h5>
//       <button>Submit</button>
//     </div>
//   );
// };

const Home = () => {
  const [isALertLoading, setIsAlertLoading] = useState(false);
  const [isPostSuccess, setIsPostSuccess] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
 

  useEffect(() => {
    if (isPostSuccess) {
      alert("Facebook post posted successfully");
    }
  }, [isPostSuccess]);

  const handleAlertFacebookPost = () => {
    setIsAlertLoading(true);
    postToFacebook(
      `Flood Alert: Due to continuous heavy rainfall, there is a risk of flooding in low-lying areas. Residents are advised to stay alert, avoid unnecessary travel, and move to higher ground if needed. Keep emergency supplies ready and follow updates from local authorities. Your safety is our priority. Stay prepared and vigilant during this time. - ${new Date().toString()}`
    ).then(() => {
      setIsAlertLoading(false);
      setIsPostSuccess(true);
      setTimeout(() => {
        setIsPostSuccess(false);
      }, 100);
    });
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Map Component */}
      <MapComponent
        userLocation={userLocation}
        setUserLocation={setUserLocation}
      />
      <div className="absolute z-100 top-4 right-4 ">
        <p
          className="bg-red-900 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={handleAlertFacebookPost}
        >
          🚨 &nbsp;Alert {isALertLoading ? "Loading..." : ""}
        </p>
      </div>

      {/* {openForm && <AlertForm />} */}

      {/* //news  */}
      <NewsComponent />

      {/* weather forecast */}
      <WeatherAlert />
    </div>
  );
};

export default Home;
