import React from 'react';
import {  FaEyeSlash } from 'react-icons/fa';
import { IoPersonOutline } from "react-icons/io5";

import '../Input/InputG1L2.css';
import { Input } from 'postcss';

const InputG1L2 = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  className,
  toggleVisibility,
  isPasswordVisible
}) => {
  return (
    <div className="relative mt-1">
      <span className="relative">
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    {/* Replace IoPersonOutline with your icon component */}
    <IoPersonOutline className="text-gray-400" />
  </span>
      <input
      // <IoPersonOutline />
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`border border-gray-300 p-2 rounded w-full ${className}`}
      /></span>
      

      {toggleVisibility && (
        <span
          onClick={toggleVisibility}
          className="absolute cursor-pointer right-3 top-3">
          {isPasswordVisible ? <FaEyeSlash /> : <FaEyeSlash />}
        </span>
      )}

      {/* <div className="cont">   <input
      // <IoPersonOutline />
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`border border-gray-300 p-2 rounded w-full ${className}`}
      /> */}
       
      {/* </div> */}
      
    </div>
  );
};

export default InputG1L2;
