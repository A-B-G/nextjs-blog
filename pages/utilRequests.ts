import Head from 'next/head';
import { json } from 'stream/consumers';
import { LoginData } from '../interfaceTypes';

/* fetch requests and promises: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */
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

//send POST request with init object as 2nd param
export async function getMessage() {
  let res = await fetch("http://localhost:8000/test-server", {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer',
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({username: 'guest', password: 'pass'})
  } );
  let resJson = await res.json();
  let resData = await resJson;
  return resData;
}

export async function requestLogin(formData:LoginData) {
  let res = await fetch("http://localhost:8000/api/login", {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer1234',
      'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({formData})
    } );

  let resJson = await res.json();
  let resData = await resJson;
  let authToken = resData.accessToken;
  // console.log("authToken from util:", authToken);
  return authToken;
}

export async function createNewBlog(authToken:string) {
  
  let res = await fetch("http://localhost:8000/api/new-post", {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`,
    }
  });
  let resJson = await res.json();
  let resData = await resJson;
  console.log("resData from createNewBlog util fn:", resData);

}
