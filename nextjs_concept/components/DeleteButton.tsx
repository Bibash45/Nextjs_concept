"use client";
import React from "react";
import { deleteUser, removeUser } from "@/utils/actions";
import { useFormStatus } from "react-dom";

export const DeleteButton = ({ id }: { id: string }) => {
  const { pending } = useFormStatus();
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        Delete
      </button>
    </form>
  );
};
