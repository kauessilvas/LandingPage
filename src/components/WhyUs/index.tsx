import { HiArrowLongRight } from "react-icons/hi2";

export default function WhyUs() {
  return (
    <section id="whyUs" className="flex w-full items-center justify-center gap-32 bg-white px-20 py-28 lg:flex-col lg:gap-16 lg:px-4">
      <div className="max-w-[15rem]">
        <h2 className="text-4xl font-semibold text-obsidian">
          Why Choosing Us
        </h2>
      </div>
      <div className="flex gap-10 lg:flex-col">
        <div className="flex w-72 flex-col gap-8 lg:w-full">
          <h3 className="text-2xl font-semibold text-obsidian">
            Luxury facilities
          </h3>
          <p className="text-base font-light text-obsidian">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
          <div className="flex items-center">
            <a className="text-sm font-medium text-amber" href="#">
              More Info
            </a>
            <HiArrowLongRight className="h-6 w-12 text-amber" />
          </div>
        </div>
        <div className="flex w-72 flex-col gap-8  lg:w-full">
          <h3 className="text-2xl font-semibold text-obsidian">
            Affordable Price
          </h3>
          <p className="text-base font-light text-obsidian">
            You can get a workspace of the highest quality at an affordable price
            and still enjoy the facilities that are only here.
          </p>
          <div className="flex items-center">
            <a className="text-sm font-medium text-amber" href="#">
              More Info
            </a>
            <HiArrowLongRight className="h-6 w-12 text-amber" />
          </div>
        </div>
        <div className="flex w-72 flex-col gap-8 lg:w-full">
          <h3 className="text-2xl font-semibold text-obsidian">
            Many Choices
          </h3>
          <p className="text-base font-light text-obsidian">
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>
          <div className="flex items-center">
            <a className="text-sm font-medium text-amber" href="#">
              More Info
            </a>
            <HiArrowLongRight className="h-6 w-12 text-amber" />
          </div>
        </div>
      </div>
    </section>
  );
}
