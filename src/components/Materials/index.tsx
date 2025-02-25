import materials from "/public/assets/sections-img/materials.png";
import { HiArrowLongRight } from "react-icons/hi2";

import Image from "next/image";

function Materials(): JSX.Element {
  return (
    <section id="materials" className="flex w-full items-center justify-around bg-white py-12 lg:h-screen lg:flex-col-reverse lg:justify-center lg:gap-5 lg:px-4">
      <div className="flex max-w-[556px] flex-col gap-5">
        <small className="text-lg font-light uppercase text-amber">
          MATERIALS
        </small>
        <h2 className="text-4xl font-semibold text-obsidian">
          Very serious materials for making furniture
        </h2>
        <p className="text-lg font-light text-obsidian ">
          Because Panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <div className="mt-1 flex items-center">
          <a className="text-sm font-medium text-amber" href="#">
            More Info
          </a>
          <HiArrowLongRight className="h-6 w-12 text-amber" />
        </div>
      </div>
      <div>
        <Image
          src={materials}
          width={629}
          height={445}
          alt="Image"
          className="lg:h-[370px] lg:w-[529px]"
        />
      </div>
    </section>
  );
}

export default Materials;
