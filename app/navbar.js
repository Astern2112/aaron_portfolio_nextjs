import Link from 'next/link';

const navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
};

export default navbar;
