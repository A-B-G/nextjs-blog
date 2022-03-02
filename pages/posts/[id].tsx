import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostsIds, getPostData } from '../../lib/posts';
import { MyPostData } from '../../interfaceTypes';
import postStyles from '../../styles/Posts.module.css';


interface MyParams {
    params: { id: string }
}

export async function getStaticPaths() {
    // paths has an array of paths returned from getAllPostIds
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }: MyParams) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }: MyPostData) {
    return (
        <Layout>
            <h2 className={postStyles.postsHeadingMD}>
                {postData.title}
            </h2>
            <br />
            {postData.id} 
            <br />
            <small>{postData.date}</small>
            <br />
            {/* // render the contentHTML */}
            <div dangerouslySetInnerHTML={{__html: postData.contentHTML}} />
        </Layout>
    )
}
