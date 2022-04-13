import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

const PostPage = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data)) 
  }, [id]);

    return (
        <div className='blog-container'>
           {post && (
               <>
                   <h1>{post.title}</h1>
                   <p>{post.body}</p>

                   <NavLink to='/posts' className='button-previous-post'>🔙 Go back to the previous posts</NavLink>
               </>
           )}
        </div>
  )
}

export {PostPage};
