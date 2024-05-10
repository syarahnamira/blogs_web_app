"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { UpdateUser, UserDetail } from "@/app/type";
import { updateUser, getUserById } from "@/app/action";
import { useRouter } from "next/navigation";

export default function FormUpdateComponent({ id }: { id: number }) {
  const [update, setUpdate] = useState<UpdateUser>({
    id: 0,
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserDetail() {
      try {
        const userDetail: UserDetail = await getUserById(id);
        setUpdate({
          id: userDetail.id,
          name: userDetail.name,
          email: userDetail.email,
          gender: userDetail.gender,
          status: userDetail.status,
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    }

    fetchUserDetail();
  }, [id]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = event.target;
    setUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateUser(update);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      router.push("/userpages");
    }
  }, [isSubmitted, router]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="form-control w-full max-w-xs">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={update.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={update.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="gender"
            value={update.gender}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </label>
        <label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="status"
            value={update.status}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </label>
        <button
          type="submit"
          className="btn btn-wide bg-navbar w-full max-w-xs"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
