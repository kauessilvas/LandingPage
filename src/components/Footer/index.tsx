function Footer(): JSX.Element {
  return (
    <footer id="footer" className="flex min-h-[462px] w-full flex-col justify-center gap-24 bg-frost px-[188px] md:gap-10 lg:px-4">
      <div className="flex items-center justify-between md:flex-col md:gap-8">
        <div className="flex max-w-[293px] flex-col gap-7 md:max-w-full md:items-center">
          <h3 className="text-2xl font-semibold text-obsidian">Panto</h3>
          <p className="text-base font-light text-obsidian">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
        </div>
        <div className="flex justify-between gap-28 sm:flex-wrap md:w-full md:gap-8">
          <div className="grid gap-4">
            <p className="mb-1 text-base font-light text-amber">Services</p>
            <a className="text-base font-light text-obsidian" href="#">Email Marketing</a>
            <a className="text-base font-light text-obsidian" href="#">Campaigns</a>
            <a className="text-base font-light text-obsidian" href="#">Branding</a>
          </div>
          <div className="grid gap-4">
            <p className="mb-1 text-base font-light text-amber">Furnitures</p>
            <a className="text-base font-light text-obsidian" href="#">Beds</a>
            <a className="text-base font-light text-obsidian" href="#">Chair</a>
            <a className="text-base font-light text-obsidian" href="#">All</a>
          </div>
          <div className="grid gap-4">
            <p className="mb-1 text-base font-light text-amber">Follow Us</p>
            <a className="text-base font-light text-obsidian" href="#">Facebook</a>
            <a className="text-base font-light text-obsidian" href="#">Twitter</a>
            <a className="text-base font-light text-obsidian" href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-base font-light text-[#1E2833]">
            Copyright © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-4">
          <a className="text-base font-light text-obsidian" href="#">
            Terms & Conditions
          </a>
          <a className="text-base font-light text-obsidian" href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
