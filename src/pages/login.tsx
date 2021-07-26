import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import { GetStaticProps, GetStaticPropsContext } from 'next';

const Login: React.FunctionComponent = () => {
  return <AppLayout>Login</AppLayout>;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log(context);
  console.log(process.cwd());
  return {
    props: {},
    revalidate: 10,
  };
};

export default Login;
