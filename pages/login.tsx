import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import { getAllPosts } from '../pages/utilRequests';

type MyPostsDataProps = {
    allPostsData: {
        id: number;
        date: string;
        modified?: string;
        title: string;
        excerptpost: string;
        fullpost: string
    }[]
  }
// process the data from getAllPosts INSIDE getStaticProps
export async function getStaticProps() {
    const allPostsData = await getAllPosts();
    // return the data as a props object
    return {
        props: { allPostsData } //array of objects
    }
}


export default function Login({ allPostsData }: MyPostsDataProps) {

    return (
        <div>
            <Head>
                <title>Login</title>
                <meta name="description" content="Admin login" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={utilStyles.title}>
            <h1>Login</h1>
            </header>

            <main className={utilStyles.main}>
                <label>name</label>
                <input type="text" placeholder="name" />
                <ul className={utilStyles.list}>
                    {allPostsData.map((d => (
                        <li>
                            <h2>{d.title}</h2>
                            <article>{d.excerptpost}</article>
                        </li>
                    )))}
                </ul>
            </main>
        </div>
    )

}
