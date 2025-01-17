import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="my-6 dark:bg-gray-100 dark:text-gray-800 border-2 rounded-xl">
      <div className="container border-b-2 bg-violet-200 flex flex-col items-center mx-auto md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center">
          What our customers are says
        </h1>
      </div>

      {/* swiper slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container flex flex-col  max-w-3xl mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-around">
              <div className="flex space-x-4">
                <div className="h-16 w-16">
                  <img
                    src="https://i.ibb.co/k91zQkr/close-up-view-young-handsome-man-wearing-glasses-looking-front-isolated-orange-wall-89-141793-74177.jpg"
                    className="object-cover w-10 h-10 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Saddam Hossain</h4>
                  <span className="text-xs dark:text-gray-600">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.8</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                Overall, PicoTask has been a game-changer for me. It’s a
                legitimate and reliable way to earn extra money from home. The
                user-friendly interface, diverse tasks, excellent customer
                service, and timely payments make it a standout platform. I
                highly recommend PicoTask to anyone looking for flexible online
                earning opportunities. It’s truly been a positive and rewarding
                experience for me!
              </p>
              <p>
                Payments on PicoTask are reliable and prompt. I usually choose
                to receive my earnings via PayPal, and I’ve never experienced
                any delays. The multiple payment options are a big plus, as they
                offer flexibility based on individual preferences. Knowing that
                I’ll get paid on time every time builds a lot of trust in the
                platform.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex flex-col max-w-3xl p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-around p-4">
              <div className="flex space-x-4">
                <div className="w-16 h-16">
                  <img
                    src="https://i.ibb.co/jbZTvnV/random2.webp"
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Selina Aktar</h4>
                  <span className="text-xs dark:text-gray-600">1 day ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.9</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                The customer service team at PicoTask deserves a special
                mention. Whenever I’ve had a question or encountered an issue,
                their response has been quick and helpful. One time, I had a
                problem with a task not crediting properly, and the support team
                resolved it within 24 hours. Their professionalism and
                efficiency have really impressed me.
              </p>
              <p>
                The earning potential on PicoTask is fantastic. I love the
                variety of tasks available from taking surveys and testing apps
                to freelance writing gigs. The payouts are competitive compared
                to other platforms I have been able to earn a steady side
                income. On average, I make around $150-$200 a month, which is a
                great supplement to our household budget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex flex-col max-w-3xl p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-around p-4">
              <div className="flex space-x-4">
                <div className="w-16 h-16">
                  <img
                    src="https://i.ibb.co/dr1GFWC/random3.jpg"
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Razon Das</h4>
                  <span className="text-xs dark:text-gray-600">3 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.7</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                I’ve been using PicoTask for about six months now, and I
                couldn’t be happier with my experience. As a stay-at-home mom,
                finding a flexible way to earn extra income has been crucial for
                me, and PicoTask has exceeded my expectations in several ways.
              </p>
              <p>
                The website is incredibly easy to use. From the moment I signed
                up, I found the interface to be clean and intuitive. The
                dashboard is well-organized, making it simple to find tasks that
                match my skills and interests. I particularly appreciate the
                clear instructions provided for each task, which eliminate any
                guesswork and help me complete tasks efficiently.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
