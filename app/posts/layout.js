import Link from 'next/link';
import { use } from 'react';

async function getPosts() {
  let posts = await fetch('https://dummyjson.com/posts?limit=3');

  return posts.json();
}

const layout = ({ children }) => {
  let { posts } = use(getPosts());
  console.log('--------------------------------');
  console.log(posts);
  console.log('--------------------------------');

  return (
    <div>
      <h3>Posts:</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <div>{children}</div>
    </div>
  );
};

export default layout;
