import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout';
// import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

type MyPostsDataProps = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[]
}
// returning allPostsData inside the props object in GetStaticProps 
// will pass the blog posts to the Home component as a prop
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home( { allPostsData }: MyPostsDataProps ) {
  return (
    <Layout home>
      <Head>
        <title>Welcome</title>
         <meta name="description" content="Azania Baker-Garcia's blog" />
         <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
         <h1 className={utilStyles.title}>
           ABG Blogs
         </h1>
      </header>

      <main className={utilStyles.main}>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there my name is Azania Baker-Garcia. I love to learn and
          will use this space for notes on various things I am interested in.
          Although <a href="https://www.notion.so/product" rel="noreferrer" target="_parent">Notion</a> is my favorite place for notes, I've created
          this blog to share with other enquiring minds such as myself (and also
          to practice creating a Next.js framework).
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <h3 className={utilStyles.headingSm}>
                <Link href={`/posts/${id}`}>
                <a>{title}</a>
                </Link>
              </h3>              
              <small>{date}</small>
            </li>
  
            )
          )}
          </ul>
         
      </section>

      </main>
    </Layout>
  )
}
