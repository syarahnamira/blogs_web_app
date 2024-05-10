export type Blog = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type DetailBlog = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type User = {
  name: string;
};

export type UserDetail = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type Comment = {
  name: string;
  body: string;
};

export type DetailPostParam = {
  params: {
    blog_id: string;
  };
  searchParams: {};
};

export type UserInput = {
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type UpdateUser = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};
