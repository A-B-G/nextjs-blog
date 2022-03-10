export interface MyPostData {
    postData: {
        id: string;
        contentHTML: string
        title: string;
        date: string;
    }
}
export interface MyPostsDataProps {
    allPostsData: {
        id: number;
        date: string;
        modified?: string;
        title: string;
        excerptpost: string;
        fullpost: string
    }[]
  }

  export interface LoginData {
    username: string;
    password: string;
    authToken?: string;
  }