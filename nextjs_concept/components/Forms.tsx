"use client";

import { useFormState, useFormStatus } from "react-dom";

import React from "react";
import { createUser } from "@/utils/actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={btnStyle} disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const Forms = () => {
  const [message, formAction] = useFormState(createUser, null);
  return (
    <form className={formStyle} action={formAction}>
      <p>{message}</p>
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
        name="lastname"
        placeholder="enter last name"
        defaultValue="Chaudhary"
      />
      <SubmitButton />
    </form>
  );
};

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

export default Forms;
