import { Helmet } from "react-helmet-async";
import Hero from "../../Components/Hero";
import Testimonials from "../../Components/Testimonials";
import TopEarners from "../../Components/TopEarners";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PicoTask Rush - Home</title>
      </Helmet>
      <div>
        <Hero></Hero>
        <TopEarners></TopEarners>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
