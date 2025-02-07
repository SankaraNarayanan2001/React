import  axios  from "axios";

type PostDetail = {
    userId: number;
    id:number;
    title: string;
    body:string;
}

export async function getPost({params: {id}}: {params: {id: number}}): Promise<PostDetail> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await response.json();
}

// type postList = {
//      userId: number , id: number , title : string , body : string;
// }

export async function getPostList(): Promise<PostDetail> {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return await response.data;
}

export async function userList(): Promise<PostDetail> {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return await response.data;
}