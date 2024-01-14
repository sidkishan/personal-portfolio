import React from "react";
const Skill = ({ text, color }) => {
  return (
    <div className={` bg-${color} py-0.5 px-0.5`}>
      <p
        className={`bg-deep-blue  hover:text-${color} transition duration-500 flex items-center justify-center font-playfair px-2 py-1 cursor-pointer`}
      >
        {text.toUpperCase()}
      </p>
    </div>
  );
};

export default Skill;
