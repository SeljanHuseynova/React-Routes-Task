import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Blogs = () => {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data); 
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <>
      <div className="container my-2 my-md-5">
        <h1 className = 'mb-4 mt-4'>Blog Posts</h1>
        <div className="row">
          {posts.map(post => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card">
                <div className="card-body ">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
