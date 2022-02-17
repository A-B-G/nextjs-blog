import Head from 'next/head';

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

  //create a get request to import elsewhere
export async function getAllPosts() {
    //send get request and wait for response to resolve, then save response to variable
    let res = await fetch("https://test-blog-db.herokuapp.com/test");
    //process response object with .json() after promise resolves and save it to a variable
    let resJson = await res.json();
    //save resolved res.json() object to variable 
    let dbData = await resJson;
    //return the db data 
    return dbData;

}
