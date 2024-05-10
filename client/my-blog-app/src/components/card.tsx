import { Blog } from "@/app/type";
import Link from "next/link";

export default function CardComponent({ blog }: { blog: Blog }) {
  return (
    <div className="card bg-card shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <p>{blog.body}</p>
        <div className="card-actions justify-end">
          <Link
            href={`/blogs/detail/${blog.id}`}
            className=" btn hover bg-buttonwarn"
          >
            {" "}
            See Details{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
