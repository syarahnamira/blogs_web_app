"use client"

import React, { useState, useEffect } from 'react';
import { getUser } from '../action';
import { UserDetail } from "@/app/type";
import TableComponent from '@/components/tableUser';

export default function UserPage() {
  const [userDetails, setUserDetails] = useState<UserDetail[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState(1);
  let per_page = 10

  useEffect(() => {
    async function fetchUsers() {
      
      const data = await getUser(searchQuery, page, per_page);
      setUserDetails(data);
    }
    fetchUsers();
  }, [searchQuery, page, per_page]);

  const handleDelete = (userId: number) => {
    setUserDetails(currentUsers => currentUsers.filter(user => user.id !== userId));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-between font-mono text-sm lg:flex">
        <h1 style={{ marginBottom: 50, fontSize: "25px" }}> Users List</h1>
        <div className="w-full mb-20">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search users by name"
              className="input input-bordered"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <TableComponent users={userDetails} onDelete={handleDelete} />
      </div>
      <div>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="pr-4 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none disabled:opacity-50 mt-10"
          >
            Previous
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none mt-10"
          >
            Next
          </button>
        </div>
    </main>
  );
}
