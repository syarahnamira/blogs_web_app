import { DetailBlog, DetailPostParam, User, Comment } from "@/app/type";
import CommentComponen from "@/components/comment";

async function getDetailBlog(post_id: string): Promise<DetailBlog> {
  const response = await fetch(
    `https://gorest.co.in/public/v2/posts/${post_id}`
  );
  return await response.json();
}

async function getComments(post_id: string): Promise<Comment[]> {
  const response = await fetch(
    `https://gorest.co.in/public/v2/posts/${post_id}/comments`
  );
  return await response.json();
}

async function getUserDetail(user_id: number): Promise<User> {
  const response = await fetch(
    `https://gorest.co.in/public/v2/users/${user_id}`
  );
  return await response.json();
}

export default async function DetailPage(params: DetailPostParam) {
  try {
    const blog = await getDetailBlog(params.params.blog_id);
    const comments = await getComments(params.params.blog_id);
    const user = await getUserDetail(blog.user_id);

    let author = "";
    if (user.name === undefined) {
      author = "Unknown";
    } else {
      author = user.name;
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container mx-auto px-4">
          <div className="bg-base-100 shadow-xl rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-4 justify-content">
              {blog.title}
            </h1>
            <h3 className="text-lg mb-6">Author: {author}</h3>
            <p className="text-lg mb-4">{blog.body}</p>
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            {comments.map((comment) => (
              <CommentComponen key={comment.key} name={comment.name} body={comment.body} />
            ))}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
