import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head >
                <meta name="color-scheme" content="only light" />
            </Head>
            <body style={{height: 0}}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
