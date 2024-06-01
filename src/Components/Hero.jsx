import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";

const Hero = () => {
  return (
    <div>
      <Carousel>
        <div className="relative">
          <img src={img2} className="rounded-lg" alt="" />
          <div className="absolute right-1/2 top-1/2">
            <h2 className="text-2xl font-bold text-white">
              PicoTask Marketplace: Unlocking Opportunities, One Task at a Time
            </h2>
            <div className="flex gap-6 absolute left-20 my-4 text-center">
              <button className="btn btn-primary">Find Us</button>
              <button className="btn btn-secondary">Explore</button>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} className="rounded-lg" alt="" />
          <div className="absolute right-1/2 top-1/2">
            <h2 className="text-2xl font-bold text-white">
              Empower Your Potential: Join Our PicoTask Community Today!
            </h2>
            <div className="flex gap-6 absolute left-20 my-4">
              <button className="btn btn-primary">Find Us</button>
              <button className="btn btn-secondary">Explore</button>
            </div>
          </div>
        </div>
        <div>
          <img src={img3} className="rounded-lg" alt="" />
          <div className="absolute right-1/2 top-1/2">
            <h2 className="text-2xl font-bold text-white">
              PicoTask Rush: Where Every Click Counts Towards Success
            </h2>
            <div className="flex gap-6 absolute left-20 my-4">
              <button className="btn btn-primary">Find Us</button>
              <button className="btn btn-secondary">Explore</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
