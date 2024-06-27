import { Carousel } from "flowbite-react";

import img1 from "./../assets/img/display/DAB_2854.jpg";
import img2 from "./../assets/img/display/DAB_2921.jpg";
import img3 from "./../assets/img/display/1716903972715.jpg";

function Hero() {
  return (
    <section id="home" className="dark:bg-dark lg:h-screen">
      <div className="container pt-10">
        <h1 className="text-4xl md:text-5xl text-center capitalize pb-10  text-dark dark:text-white font-bold">
          selamat datang di website{" "}
          <span className="text-primary block">SMK Al-Mabrur Pejawaran</span>
        </h1>
        <div className="flex flex-wrap w-full lg:pt-20">
          <div className="self-center lg:w-1/2  order-2 lg:order-1">
            <ul className="flex flex-wrap justify-center gap-3 lg:h-1/2  text-dark dark:bg-dark dark:text-white ">
              <li className=" text-4xl md:text-5xl first-letter:text-primary first-letter:font-bold">
                Jujur
              </li>
              <li className=" text-4xl md:text-5xl first-letter:text-primary first-letter:font-bold">
                Elegan
              </li>
              <li className=" text-4xl md:text-5xl first-letter:text-primary first-letter:font-bold">
                Nasionalis
              </li>
              <li className=" text-4xl md:text-5xl first-letter:text-primary first-letter:font-bold">
                Islami
              </li>
              <li className=" text-4xl md:text-5xl first-letter:text-primary first-letter:font-bold">
                Ulet
              </li>
              <li className=" text-4xl md:text-5xl first-letter:text-primary first-letter:font-bold">
                Santun
              </li>
            </ul>
            <p className="text-center text-dark py-4 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              voluptatibus dolore. Cumque reprehenderit animi sit numquam eius
              dolor mollitia repellendus ipsum suscipit. Ab enim porro
              distinctio unde sed omnis quidem delectus minus laborum explicabo
              rem nemo laudantium, provident vero iure laboriosam. Quae numquam
              fuga voluptatum quibusdam adipisci facere aperiam ratione.
            </p>
          </div>
          <div className=" w-full pb- lg:w-1/2 order-1 lg:order-2 lg:justify-end lg:pl-12">
            <div className="h-80 xl:h-96 py-7 rounded-lg overflow-hidden ">
              <Carousel className="shadow-lg">
                <img src={img1} alt="..." className="rounded-lg" />
                <img src={img2} alt="..." className="rounded-lg" />
                <img src={img3} alt="..." className="rounded-lg" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
