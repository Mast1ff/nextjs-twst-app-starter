import * as React from 'react';
import Head from 'next/head';

interface I {
    hostname: string
    path: string
    title: string
    pageName?: string
    image?: string
    description?: string
    twitter?: boolean
    facebook?: boolean
    fbAppId?: string
}

const OGP: React.FC<I> = ({
    hostname,
    path,
    title,
    pageName,
    image,
    description,
    twitter = true,
    facebook = true,
    fbAppId,
}) => {
    return (
        <Head>
            <title>{`${pageName ? `${pageName} | ` : ''}${title}`}</title>
            <meta name={ 'description' } content={ description || '' } />
            <meta property={ 'og:type' } content={ 'website' } />
            <meta property={ 'og:title' } content={ title } />
            <meta property={ 'og:description' } content={ description || '' } />
            <meta property={ 'og:image' } content={ image || '' } />
            <meta property={ 'og:url' } content={ `${hostname}${path}` } />
            <meta property={ 'og:site_name' } content={ title } />
            {twitter
                ? (
                    <>
                        <meta name={ 'twitter:card' } content={ 'summary_large_image' } />
                        <meta name={ 'twitter:title' } content={ title } />
                        <meta name={ 'twitter:description' } content={ description || '' } />
                    </>
                )
                : null}
            {facebook
                ? (
                    <meta property='fb:app_id' content={ fbAppId } />
                )
                : null}
        </Head>
    );
};

export default OGP;
