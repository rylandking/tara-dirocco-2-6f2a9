import '../components/register-components';
import '../css/main.css';
import Head from 'next/head';

import { GlobalProvider } from '../context/GlobalState';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalProvider>
                <Head>
                    <link rel="icon" href="/favicon.svg" />
                </Head>
                <Component {...pageProps} />
            </GlobalProvider>
        </>
    );
}
