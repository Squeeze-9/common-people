import React from 'react';
import { GetServerSideProps } from 'next';
import fs from 'fs/promises';
import path from 'path';
import type { Post } from '../../types/post';
import AppLayout from '../../components/layout/AppLayout';
import { useRouter } from 'next/router';

type CategorizedBoardProps = {
  posts: [Post];
};

const CategorizedBoard: React.FC<CategorizedBoardProps> = ({ posts }) => {
  const router = useRouter();
  const {
    query: { categoryName },
  } = router;

  const handleClickPost = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    postId: string
  ) => {
    e.preventDefault();
    router.push(`/post/${postId}`);
  };

  return (
    <AppLayout>
      <>
        <h1>{categoryName} Board</h1>
        <ul>
          {posts?.map((post: Post) => (
            <li
              key={post.postId}
              onClick={(e) => handleClickPost(e, post.postId)}
            >
              <a>
                <span>{post.title}</span>
                <span>{post.comments.length}</span>
                <span>{post.viewCount}</span>
                <span>{post.likeCount}</span>
              </a>
            </li>
          ))}
        </ul>
      </>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const filePath: string = path.join(process.cwd(), 'data', 'dummy-data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  const posts = data.posts.filter(
    (post: Post): boolean => post.category === params?.categoryName
  );

  if (!posts) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      posts,
    },
  };
};

export default CategorizedBoard;
