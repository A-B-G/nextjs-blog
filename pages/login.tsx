import Head from 'next/head';
import { useState } from 'react';
import utilStyles from '../styles/utils.module.css';
import { getAllPosts, requestLogin, createNewBlog } from '../pages/utilRequests';
import { MyPostsDataProps } from '../interfaceTypes';
import { initialVal } from '../hooks/useInputState';
// import FormInputHook from '../hooks/FormInputHook';



// process the data from getAllPosts INSIDE getStaticProps
export async function getStaticProps() {
    const allPostsData = await getAllPosts();
    // return the data as a props object
    return {
        props: { allPostsData } //array of objects
    }
}

export default function Login({ allPostsData }: MyPostsDataProps) {

    let [username, setUsername, resetUsername] = initialVal(" ");
    let [password, setPassword, resetPassword] = initialVal(" ");
    let [token, setToken] = useState("");

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let loginData = { username, password }
        requestLogin(loginData)
        .then((val) => {
            setToken(val);
            // console.log("token:", token);
            createNewBlog(token);
        })
        resetUsername(" ");
        resetPassword(" ");
    }
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
                {/* <FormInputHook                 
                 /> */}
                 <div className="login-form">
                    <fieldset>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        placeholder="username"
                        name="username"
                        value={username}
                        onChange={setUsername}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={setPassword}
                    />
                    <button onClick={handleSubmit}>Login</button>
                    </fieldset>
                 </div>
                <ul className={utilStyles.list}>
                    {allPostsData.map((d => (
                        <li key={d.title}>
                            <h2>{d.title}</h2>
                            <article>{d.excerptpost}</article>
                        </li>
                    )))}
                </ul>
            </main>
        </div>
    )

}
