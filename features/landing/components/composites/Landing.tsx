import GraduatesGallery from "../gallery/Gallery";
import AboutUs from "./AboutUs";
import DearFutureMe from "./DearFutureMe";
import Statistic from "./Statistic";

const Landing = () => {
  return (
    <div>
      <AboutUs />
      {/* <DearFutureMe /> */}
      <GraduatesGallery />
      <Statistic />
    </div>
  );
};

export default Landing;
