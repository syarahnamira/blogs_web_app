"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { UserInput } from "@/app/type";
import { addUser } from "@/app/action";
import { useRouter } from 'next/navigation';

export default function FormComponent() {
  const [input, setInput] = useState<UserInput>({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();  

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.preventDefault();
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addUser(input);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      router.push('/userpages');
    }
  }, [isSubmitted, router]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name Input */}
        <div className="form-control w-full max-w-xs">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Email Input */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.5L8 9l7-4.5V4a1 1 0 0 0-1-1H2zm13 2.82L8.76 9.56a.5.5 0 0 1-.52 0L1 5.82V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.82z"
            />
          </svg>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
        </label>

        {/* Gender Select */}
        <label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="gender"
            value={input.gender}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </label>

        {/* Status Select */}
        <label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="status"
            value={input.status}
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
