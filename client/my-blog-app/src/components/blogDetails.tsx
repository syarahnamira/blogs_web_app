import { DetailBlog } from "@/app/type";

export default function BlogPostDetails({ title, body }: DetailBlog) {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-base-100 shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-4">{body}</p>
      </div>
    </div>
  );
}
