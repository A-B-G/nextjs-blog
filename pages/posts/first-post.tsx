import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';


export default function FirstPost() {

    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <meta name="description" content="Blog post 1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                First Post
                </h1>

            </main>

        </Layout>
    )
}
