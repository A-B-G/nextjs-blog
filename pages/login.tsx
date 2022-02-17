import Head from 'next/head';
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
    console.log("allPostsData:", allPostsData);
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
            <h1>Login</h1>
            <label>name</label>
            <input type="text" placeholder="name" />
            <ul>
                {allPostsData.map((d => (
                    <li>
                        <h2>{d.title}</h2>
                        <article>{d.excerptpost}</article>
                    </li>
                )))}
            </ul>
        </div>
    )

}
