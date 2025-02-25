import experiences from "/public/assets/sections-img/experiences.png";
import { HiArrowLongRight } from "react-icons/hi2";

import Image from "next/image";

function Experiences(): JSX.Element {
  return (
    <section id="experiences" className="flex w-full items-center justify-around bg-white pt-12 lg:h-screen lg:flex-col lg:justify-center lg:gap-5 lg:px-4">
      <div>
        <Image
          src={experiences}
          width={629}
          height={445}
          alt="Image"
          className="rounded-3xl lg:h-[345px] lg:w-[529px]"
        />
      </div>
      <div className="flex max-w-[556px] flex-col gap-5">
        <small className="text-lg font-light uppercase text-amber">
          EXPERIENCES
        </small>
        <h2 className="text-4xl font-semibold text-obsidian">
        We Provide You With The Best Experience
        </h2>
        <p className="text-lg font-light text-obsidian ">
          You don&apos;t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and luxurious style and premium quality materials
        </p>
        <div className="mt-1 flex items-center">
          <a className="text-sm font-medium text-amber" href="#">
            More Info
          </a>
          <HiArrowLongRight className="h-6 w-12 text-amber" />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
