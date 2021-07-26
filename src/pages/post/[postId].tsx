import { GetServerSideProps } from 'next';
import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import type { Post } from '../../types/post';
import AppLayout from '../../components/layout/AppLayout';

type PostDetailProps = {
  post: Post;
};

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  const {
    title,
    description,
    comments,
    likeCount,
    dislikeCount,
    viewCount,
  } = post;

  return (
    <AppLayout>
      <div>
        <h1>PostDetail</h1>
        <h2>제목: {title}</h2>
        <p>내용: {description}</p>
        <p>
          댓글:
          {comments.map((comment, index) => (
            <span key={index}>{comment}</span>
          ))}
        </p>
        <p>조회 수: {viewCount}</p>
        <p>좋아요 수: {likeCount}</p>
        <p>싫어요 수: {dislikeCount}</p>
      </div>
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

  const post = data.posts.find(
    (post: Post): boolean => post.postId === params?.postId
  );

  if (!post) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: { post },
  };
};

export default PostDetail;
