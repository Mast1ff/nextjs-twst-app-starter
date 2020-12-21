/** modules */
import * as React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import NextProgress from 'nextjs-progressbar';

/** styles */
import '../_styles/normalize.css';
import '../_styles/layout.css';
import '../_styles/flex.css';
import '../_styles/spacing.css';
import '../_styles/typography.css';
import '../_styles/utils.css';
import '../_styles/colors.css';
import '../_styles/index.css';

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
        </>
    );
};

export default MyApp;
