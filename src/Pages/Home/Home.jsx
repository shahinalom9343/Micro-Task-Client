import { Helmet } from "react-helmet-async";
import Hero from "../../Components/Hero";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PicoTask Rush - Home</title>
      </Helmet>
      <div>
        <Hero></Hero>
      </div>
    </div>
  );
};

export default Home;
