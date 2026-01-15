import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiComponent = () => {

  //Creating a state to store and read the data
  const [posts, setPosts] = useState([]);

  //Creating an async funtion to fetch an API abd call it inside the useEffect function to mount it.
  const getPosts = async () => {
    //.......Using fetch
    try {
      
      //Using axios
      const response = await axios.get("https://fakestoreapi.com/products");
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //Create a lifescycle fuction using use Effect
  useEffect(() => {
    getPosts
    console.log("API Mounted");
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <h1>{post.category}</h1>
            <img src={post.image} />
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ApiComponent;