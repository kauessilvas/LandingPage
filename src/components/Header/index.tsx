import Image from "next/image";
import Navbar from "./Navbar";
import hero from "/public/assets/sections-img/header.png";

function Header(): JSX.Element {
  return (
    <header id="header" className="flex h-screen w-full flex-col items-center gap-10">
      <Image
        src={hero}
        alt="Living room with a orange sofa"
        priority
        fill={true}
        style={{position: 'absolute', objectFit: 'cover'}}
      />
      <Navbar />
      <div className="relative flex max-w-[62.5rem] flex-col gap-4 text-center">
        <h1 className="text-7xl font-semibold text-white sm:text-5xl">
          Minimalistic &amp; Modern Furniture for Your Home
        </h1>
        <p className="text-2xl font-light text-[#B1B1B3] sm:text-xl">
          Elevate Your Interior with Panto&apos;s Stylish Collection
        </p>
      </div>
    </header>
  );
}

export default Header;
