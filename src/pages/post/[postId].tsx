import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const PostDetail: React.FunctionComponent = () => {
  const {
    query: { postId },
  } = useRouter();

  return (
    <div>
      <h1>PostDetail</h1>
      <p>{postId}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default PostDetail;
