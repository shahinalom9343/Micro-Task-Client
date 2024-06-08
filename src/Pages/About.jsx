import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <Helmet>
        <title>PickTask Rush | About</title>
      </Helmet>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-5 justify-between my-10 items-center">
          <div className="text-3xl md:col-span-2 font-bold text-start">
            Welcome to <br /> PicoTask Rush
          </div>
          <div className="col-span-3">
            At Picotask, we believe in the power of individuals to shape the
            digital landscape. Our platform serves as a bridge between
            businesses seeking efficient solutions and skilled individuals eager
            to contribute their expertise. Whether you're a freelancer looking
            to earn extra income or a business in need of reliable tasks
            completed swiftly, Picotask is your go-to destination.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 justify-between my-10 items-center">
          <div className="col-span-3 text-justify">
            Diverse Opportunities: Whether you're proficient in graphic design,
            coding, writing, or any other skill, there's a place for you on
            Picotask. Our platform hosts a wide range of tasks, ensuring that
            everyone can find something that matches their expertise. <br />
            <br />
            Flexibility: Say goodbye to rigid schedules and hello to
            flexibility. With Picotask, you have the freedom to work whenever
            and wherever you want. Whether you're a night owl or an early riser,
            you can earn on your own terms. <br />
            <br />
            Community Support: Join a vibrant community of freelancers and
            businesses who are passionate about what they do. Our supportive
            community is always ready to lend a helping hand, offer advice, or
            celebrate your successes.
          </div>
          <div className="text-3xl text-justify  md:col-span-2 font-bold">
            Why Choose Us?
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
