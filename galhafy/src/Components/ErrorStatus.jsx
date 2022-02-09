import React from "react";

const ErrorStatus = ({ src, title }) => {
  return (
    <div>
      <h1 className="mt-10 text-2xl ">Error {title}</h1>
      <img src={src} alt="" className="w-2/3 pb-10 mx-auto mt-10" />
    </div>
  );
};

export default ErrorStatus;
