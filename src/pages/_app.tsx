import React, { Suspense } from 'react';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Loading from '../components/Loading';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Suspense fallback={Loading}>
      <Component {...pageProps} />;
    </Suspense>
  );
};

export default MyApp;
