import React from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';

const Footer: React.FunctionComponent = () => {
  // console.log('static footer');
  return (
    <div>
      <h1>Footer!</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log(context);
  console.log(process.cwd());
  return {
    props: {},
    revalidate: 100,
  };
};

export default Footer;
