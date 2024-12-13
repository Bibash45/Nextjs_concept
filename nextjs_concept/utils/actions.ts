"use server";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setTimeout } from "timers/promises";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};
type CreateUserMessage = "user created successfully" | "failed to create Users";

export const createUser = async (
  prevState: null,
  formData: FormData
): Promise<CreateUserMessage> => {
  "use server";
  console.log(prevState);

  await setTimeout(3000);
  const firstName = formData.get("firstname") as string;
  const lastName = formData.get("lastname") as string;

  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  try {
    await saveUser(newUser);
    revalidatePath("/actions");
    return "user created successfully";
  } catch (error) {
    console.error(error);
    return "failed to create Users";
  }
  // redirect("/");
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));

  return users;
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;
  try {
    const users = await fetchUsers();
    const filteredUsers = users.filter((user) => user.id !== id);
    await writeFile("users.json", JSON.stringify(filteredUsers));
    revalidatePath("/actions");
  } catch (error) {
    console.error(error);
  }
};
export const removeUser = async (id: string) => {
  await setTimeout(3000);
  const users = await fetchUsers();
  const filteredUsers = users.filter((user) => user.id !== id);
  await writeFile("users.json", JSON.stringify(filteredUsers));
  revalidatePath("/actions");
};
