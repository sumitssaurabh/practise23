import React from "react";
// import "./Term_condition.css";

const Term_condition = () => {
  return (
    <div className="">
      <h6 className="font-light i">
        <span>
          <input
            className= "mt-2 ml-1 text-white bg-black checkbox"
            type="checkbox"
          />
        </span>{" "}
        i agreed to the{" "}
        <span className="text-blue-700">Terms & Conditions </span>
      </h6>
    </div>
  );
};

export default Term_condition;
