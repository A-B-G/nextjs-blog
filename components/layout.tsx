import { ReactNode } from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';

type MyComponentProps = {
    children: ReactNode;
    home?: boolean;
    name?: string;
}
const name = "Azania Baker-Garcia";

export default function Layout({ children, home }: MyComponentProps) {

    return( 
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Checkout this blog built with Next.js by Azania Baker-Garcia"
                />
            </Head>

            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/BitmojiZ.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt="balding brown-skinned person smiling and waving, surrounded by colorful birds"
                        />
                    </>
                    ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/BitmojiZ.jpg"
                                    className={utilStyles.borderCircle}
                                    height={144}
                                    width={144}
                                    alt="balding brown-skinned person smiling and waving, surrounded by colorful birds"
                                /> 
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>

                        </h2>
                    </>
                )}
            </header>

            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>
                </div>
            )}
        </div>
        )

}
