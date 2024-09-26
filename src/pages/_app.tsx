import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <link rel="icon" href="/LOGO_ML.png" />
      <link rel="apple-touch-icon" href="/LOGO_ML.png" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>

  );
}

export default appWithTranslation(MyApp);