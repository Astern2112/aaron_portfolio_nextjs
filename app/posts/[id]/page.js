import { use } from 'react';

const getPost = async (id) => {
  let post = await fetch(`https://dummyjson.com/posts/${id}`);
  return post.json();
};

const page = ({ params }) => {
  let id = params.id;
  let post = use(getPost(id));
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default page;
