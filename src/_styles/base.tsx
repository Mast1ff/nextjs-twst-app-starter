import * as React from 'react';
import * as colors from './colors';
import * as mq from './mediaquery';

const BaseCSS = ():JSX.Element => {
    return (
        <style jsx global>
            {`
                html {
                    font-family:
                        'Inter',
                        -apple-system,
                        BlinkMacSystemFont,
                        'Segoe UI',
                        'Roboto',
                        'Oxygen',
                        'Ubuntu',
                        'Cantarell',
                        'Fira Sans',
                        'Droid Sans',
                        'Helvetica Neue',
                        'YakuHanJP',
                        'Noto Sans JP',
                        'Hiragino Kaku Gothic ProN',
                        'Hiragino Sans',
                        Meiryo,
                        sans-serif;
                    font-size: 100%;
                    font-feature-settings: "palt";
                }
                @media (${mq.isSPWide}) {
                    html {
                        font-size: 87.5%;
                    }
                }
                body {
                    position: relative;
                    min-height: 100vh;
                    background-color: rgb(${colors.white});
                }
                a, h1, h2, h3, h4, h5, h6, p, span {
                    line-break: strict;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-all;
                }
                a {
                    text-decoration: none;
                }
                svg {
                    display: block;
                    fill: currentColor;
                }
                h1 {
                    font-size: 2rem;
                    letter-spacing: .02rem;
                }
                h2 {
                    font-size: 1.5rem;
                    letter-spacing: .02;
                }
                h3 {
                    font-size: 1.17rem;
                }
                h4 {
                    font-size: 1rem;
                }
                h5 {
                    font-size: .83rem;
                }
                h6 {
                    font-size: .67rem;
                }
                h1 {
                    margin-top: .67rem;
                    margin-bottom: .67rem;
                }
                button {
                    appearance: none;
                    border: 0;
                    background: transparent;
                    cursor: pointer;
                    margin: 0;
                    padding: 0;
                    font: inherit;
                    color: currentColor;
                }

                [data-inert="true"], [data-inert="true"] * {
                    user-select: none;
                }
                [data-inert="true"] {
                    pointer-events: none;
                    cursor: default;
                }

                *::selection {
                    color: rgb(${colors.gray48});
                }
            `}
        </style>
    );
};

export default BaseCSS;
