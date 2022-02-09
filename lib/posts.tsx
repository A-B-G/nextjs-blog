/* **************************************************** */
/* simple library for fetching data from the file system */
/* **************************************************** */
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    //get file names from /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        //remove ".md" from file name 
        const id = fileName.replace(/\.md$/, ''); 
        //read md file as a string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        //use gray-matter to parse the metadata section
        const matterResult = matter(fileContents);
        //combine the data with id
        return {
            id, 
            ...matterResult.data as {date: string; title: string}
        }
    });
    //sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if(a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    })
}

export function getAllPostsIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    
    return fileNames.map(fileName => {
        // list returns an array of objects
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

//fetch data to render the post with the id
export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // use gray-matter to parse the metadata
    const matterResult = matter(fileContents);

    //use remark to convert md into an HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHTML = processedContent.toString();

    //combine the data with the id and contentHTML
    return {
        id,
        contentHTML,
        ...matterResult.data
    }
    
}
