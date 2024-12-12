import React from "react";

const createUser = async () => {
  "use server";
  console.log("creating user....");
};

const Forms = () => {
  return (
    <form className={formStyle} action={createUser}>
      <h2 className="text-2xl capitalize mb-4 ">Create User</h2>
      <input
        className={inputStyle}
        type="text"
        name="firstname"
        placeholder="enter first name"
        defaultValue="bibash"
        required
      />
      <input
        className={inputStyle}
        type="text"
        name="firstname"
        placeholder="enter last name"
        defaultValue="Chaudhary"
      />
      <button type="submit" className={btnStyle}>
        submit
      </button>
    </form>
  );
};

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

export default Forms;
