import Head from 'next/head'
import Layout from '../../components/layout';
import utilStyles from '../styles/utils.module.css';


type MyDbData = {
  dbData: {
    id: number;
    date: string;
    modified?: string;
    title: string;
    excerptpost: string;
    fullpost: string
  }[]
}

//use getStaticProps for pre-rendering
//fetch data inside getStaticProps
export async function getStaticProps() {
  let res = await fetch("https://test-blog-db.herokuapp.com/test");
  let resJson = await res.json();
  let dbData = await resJson;
  console.log("resJson:", typeof resJson); //resJson = array of objects

  //getStaticProps must return the data inside a props object
  return {
    props: {dbData}
  };
} 
export default function Home({dbData}: MyDbData) {
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
        <p>Self Introduction</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts List</h2>
          <ul className={utilStyles.list}>

            {dbData.map((d => (
              <li key={d.id}>
                <h2>{d.title}</h2>
                <article>{d.excerptpost}</article>
                <small>{d.date}</small>
              </li>
              )
            ))}
          </ul>
         
      </section>

      </main>
    </Layout>
  )
}
