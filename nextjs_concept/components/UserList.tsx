import React from "react";
import { fetchUsers } from "@/utils/actions";
import { DeleteButton } from "./DeleteButton";

const UserList = async () => {
  const users = await fetchUsers();

  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="flex justify-between items-center mb-2"
              >
                <h4 className="capitalize text-lg ">
                  {user.firstName} {user.lastName}
                </h4>
                <DeleteButton id={user.id} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>No user found....</div>
      )}
    </div>
  );
};

export default UserList;
