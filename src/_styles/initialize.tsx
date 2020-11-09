import * as React from 'react';

const InitializeCSS = ():JSX.Element => {
    return (
        <style jsx global>
            {`
            html, body, div, span, object, iframe,h1, h2, h3, h4, h5, h6, p,
            blockquote, pre,abbr, address, cite, code,del, dfn, em, img, ins,
            kbd, q, samp,small, strong, sub, sup, var,b, i,dl, dt, dd, ol, ul,
            li, fieldset, form, label, legend, table, caption, tbody, tfoot,
            thead, tr, th, td, article, aside, canvas, details, figcaption, figure,
            footer, header, hgroup, menu, nav, section, summary,
            time, mark, audio, video {
                margin: 0;
                padding: 0;
                border: 0;
                outline: 0;
                font-size: 100%;
                vertical-align: baseline;
                background: transparent;
            }
            body {
                line-height: 1;
            }
            article, aside, details, figcaption, figure, footer, header, hgroup,
            menu, nav, section {
                display: block;
            }
            nav ul {
                list-style: none;
            }
            blockquote, q {
                quotes: none;
            }
            blockquote:before, blockquote:after,
            q:before, q:after {
                content: '';
                content: none;
            }
            a {
                margin: 0;
                padding: 0;
                font-size: 100%;
                vertical-align: baseline;
                background: transparent;
            }
            ins {
                background-color: #ff9;
                color: #000;
                text-decoration: none;
            }
            mark {
                background-color: #ff9;
                color: #000;
                font-style: italic;
                font-weight: bold;
            }
            del {
                text-decoration: line-through;
            }
            abbr[title], dfn[title] {
                border-bottom: 1px dotted;
                cursor: help;
            }
            table {
                border-collapse: collapse;
                border-spacing: 0;
            }
            hr {
                display: block;
                height: 1px;
                border: 0;
                border-top: 1px solid #cccccc;
                margin: 1em 0;
                padding: 0;
            }
            input, select {
                vertical-align: middle;
            }
            html {
                touch-action: manipulation;
                display: block;
                unicode-bidi: isolate;
                direction: ltr;
                text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                -webkit-tap-highlight-color:  rgba(0, 0, 0, 0);
            }
            body {
                box-sizing: border-box;
                overscroll-behavior-y: none;
            }
            input, textarea, div[contenteditable="true"] {
                font-size: 16px;
            }
            *, ::after, ::before {
                box-sizing: inherit;
            }
            *, :active, :focus {
                outline: 0;
                outline-style: none;
                outline-width: 0;
                -webkit-tap-highlight-color: transparent;
            }
            button::-moz-focus-inner,
            input::-moz-focus-inner {
                border: 0;
                padding: 0;
            }
            input::-webkit-inner-spin-button,
            input::-webkit-outer-spin-button,
            input::-webkit-search-cancel-button,
            input::-webkit-search-decoration,
            input::-webkit-search-results-button,
            input::-webkit-search-results-decoration {
                display: none;
            }
            input[type="checkbox"] {
                display: none;
                user-select: none;
            }
            input[type="submit"]::-webkit-search-decoration,
            input[type="button"]::-webkit-search-decoration {
                display: none;
            }
            input[type="submit"]:focus,
            input[type="button"]:focus {
                outline-offset: -2px;
            }
            input[type="submit"] {
                padding: 0;
                border: none;
                outline: none;
                background: transparent;
            }
            input[type="button"],
            input[type="text"],
            input[type="submit"],
            input[type="image"],
            textarea {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                border-radius: 0;
            }
            body, button, input, select, textarea, ::placeholder {
                text-rendering: optimizeLegibility;
            }
            `}
        </style>
    );
};

export default InitializeCSS;
