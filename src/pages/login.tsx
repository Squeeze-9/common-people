import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import { GetStaticProps } from 'next';

const Login: React.FunctionComponent = () => {
  return <AppLayout>Login</AppLayout>;
};

export const getStaticProps: GetStaticProps = async () =>
  // context: GetStaticPropsContext
  {
    return {
      props: {},
      revalidate: 10,
    };
  };

export default Login;
