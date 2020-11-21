import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render (): JSX.Element {
        return (
            <Html
                lang={ 'ja' }
                prefix={ 'og: http://ogp.me/ns#' }
            >
                <Head>
                    <meta httpEquiv='content-language' content='ja' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id='___portal' />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
