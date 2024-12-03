import axios from "axios";

const api = axios.create({
  baseURL: "https:jsonplaceholder.typicode.com",
}); //instance of axios

const getPosts = () => api.get("/posts"); //this api has the baseUrlconfigured above.
const deletePost = (id) => api.delete(`/posts/${id}`);
const createPost = (post) => api.post("/posts", post);
const updatePost = (id, post) => api.put(`/posts/${id}`, post);

export { getPosts, deletePost, createPost, updatePost };
