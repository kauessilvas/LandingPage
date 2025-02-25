interface ButtonGroupProps {
  selectedCategory: string;
  handleButtonClick: (buttonName: string) => void;
}

function ButtonGroup({ selectedCategory, handleButtonClick }: ButtonGroupProps): JSX.Element {
  return (
    <div className="grid grid-cols-4 items-center justify-center gap-2 rounded-full bg-[#EEEEEE] p-3 shadow-sm sm:grid-cols-2 sm:rounded-3xl ">
      <button
        onClick={() => handleButtonClick("chair")}
        className={`rounded-full px-4 py-2 text-lg font-light hover:bg-obsidian hover:text-white ${
          selectedCategory === "chair"
            ? "bg-obsidian text-white"
            : "text-obsidian"
        } transition-all`}
      >
        Chair
      </button>
      <button
        onClick={() => handleButtonClick("beds")}
        className={`rounded-full px-4 py-2 text-lg font-light hover:bg-obsidian hover:text-white ${
          selectedCategory === "beds"
            ? "bg-obsidian text-white"
            : "text-obsidian"
        } transition-all`}
      >
        Beds
      </button>
      <button
        onClick={() => handleButtonClick("sofa")}
        className={`rounded-full px-4 py-2 text-lg font-light hover:bg-obsidian hover:text-white ${
          selectedCategory === "sofa"
            ? "bg-obsidian text-white"
            : "text-obsidian"
        } selectedCategory-all`}
      >
        Sofa
      </button>
      <button
        onClick={() => handleButtonClick("lamp")}
        className={`rounded-full px-4 py-2 text-lg font-light hover:bg-obsidian hover:text-white ${
          selectedCategory === "lamp"
            ? "bg-obsidian text-white"
            : "text-obsidian"
        } transition-all`}
      >
        Lamp
      </button>
    </div>
  );
}

export default ButtonGroup;
