import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Posts.module.css';

export default function ListPosts() {

    return (
        <div>
            <Head>
                <title>Posts</title>
                <meta name="description" content="List of ABG Blog posts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                Blog Posts
                </h1>
                <ul className={styles.no_bullets}>
                    <li>
                        <Link href="/posts/first-post">
                            <a>First Post</a>
                        </Link>

                    </li>
                </ul>
                <h2>
                    <Link href="/">
                        <a>Back</a>
                    </Link>
                </h2>

            </main>

        </div>
    )
}
