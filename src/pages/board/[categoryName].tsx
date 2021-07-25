import { useRouter } from 'next/router';
import React from 'react';
import AppLayout from '../../components/layout/AppLayout';
// import { GetStaticProps, GetStaticPropsContext } from 'next';

const CategorizedBoard: React.FunctionComponent = () => {
  const {
    query: { categoryName },
  } = useRouter();
  console.log('nothing categoryname');

  return (
    <AppLayout>
      <div>
        <h1>PostDetail</h1>
        <p>{categoryName}</p>
      </div>
    </AppLayout>
  );
};

// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   console.log(context);
//   return {
//     props: {},
//   };
// };

export default CategorizedBoard;
