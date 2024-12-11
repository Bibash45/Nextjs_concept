"use client";
import React from "react";

const error = ({ error }: { error: Error }) => {
  return <div>There was an error : <span className="text-red-500"> {error.message}</span></div>;
};

export default error;
