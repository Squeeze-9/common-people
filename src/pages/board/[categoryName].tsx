import { useRouter } from 'next/router';
import React from 'react';
import AppLayout from '../../components/layout/AppLayout';

const CategorizedBoard: React.FunctionComponent = () => {
  const {
    query: { categoryName },
  } = useRouter();

  return (
    <AppLayout>
      <div>
        <h1>PostDetail</h1>
        <p>{categoryName}</p>
      </div>
    </AppLayout>
  );
};

export default CategorizedBoard;
