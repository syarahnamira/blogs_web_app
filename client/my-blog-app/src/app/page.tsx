"use client";

import { useEffect, useState } from "react";
import { Blog } from "@/app/type";
import CardComponent from "@/components/card";


export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    async function fetchBlogs(): Promise<void> {
      const response = await fetch(
        `https://gorest.co.in/public/v2/posts?page=${page}&per_page=${itemsPerPage}`
      );
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  }, [page]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-4 justify-around gap-5 mb-8">
          {blogs.map((blog: Blog) => (
            <CardComponent blog={blog} key={blog.id} />
          ))}
        </div>
        <div>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="pr-4 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none disabled:opacity-50 text-lg "
          >
            Previous
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none text-lg"
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}
