import React, { Suspense } from 'react';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { getInitialPreloadedQuery, getRelayProps } from 'relay-nextjs/app';
import { getClientEnvironment } from '../lib/relay_client_environment';
import Loading from '../components/Loading';

// const Environment = createNewEnvironment();
const clientEnv = getClientEnvironment();
const initialPreloadedQuery = getInitialPreloadedQuery({
  createClientEnvironment: () => getClientEnvironment()!,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const relayProps = getRelayProps(pageProps, initialPreloadedQuery);
  const environment = relayProps.preloadedQuery?.environment ?? clientEnv!;

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={Loading}>
        <Component {...pageProps} />;
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default MyApp;
