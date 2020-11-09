/** modules */
import * as React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import NextProgress from 'nextjs-progressbar';

/** custom jsx-styles */
import InitializeCSS from '../_styles/initialize';
import BaseCSS from '../_styles/base';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <NextProgress />
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
            </Head>
            <Component { ...pageProps } />
            <InitializeCSS />
            <BaseCSS />
        </>
    );
};

export default MyApp;
