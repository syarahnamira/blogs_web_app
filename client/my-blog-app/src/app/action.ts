"use server";

import { revalidatePath } from "next/cache";
import { UpdateUser, UserInput } from "@/app/type";

const token = process.env.TOKEN;

export async function getUser(search: string, page: number, per_page: number) {
  const res = await fetch(
    `https://gorest.co.in/public/v2/users?name=${search}&page=${page}&per_page=${per_page}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();
  return data;
}

export async function getUserById(id: number) {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function deleteUser(id: number) {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 204) {
    console.log("Delete successful, no content to parse.");
    try {
      revalidatePath("/userpages");
      console.log("Revalidation successful");
    } catch (error) {
      console.error("Revalidation failed:", error);
    }
  } else {
    console.log(`Received unexpected status: ${res.status}`);
  }
}

export async function addUser(newUser: UserInput) {
  const res = await fetch("https://gorest.co.in/public/v2/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newUser),
  });

  if (res.status === 201) {
    try {
      revalidatePath("/userpages");
      console.log("Revalidation successful");
    } catch (error) {
      console.error("Revalidation failed:", error);
    }
  } else {
    console.log(`Received unexpected status: ${res.status}`);
  }
}

export async function updateUser(updateUser: UpdateUser) {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${updateUser.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updateUser),
  });

  if (res.status === 201) {
    try {
      revalidatePath("/userpages");
      console.log("Revalidation successful");
    } catch (error) {
      console.error("Revalidation failed:", error);
    }
  } else {
    console.log(`Received unexpected status: ${res.status}`);
  }
}
