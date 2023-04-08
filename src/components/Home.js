import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {firestore} from '../firebase';


function Home() {
  const [posts,setPosts] = useState([]);
  
 

  useEffect(() => {
       firestore.collection("posts").get().then((snapshot) => {
              const posts = snapshot.docs.map((doc) => {
                   return {
                      id:doc.id,
                      ...doc.data()
                   };
              })

              console.log(posts);
              setPosts(posts);
       })
     
  },[]);

    return (
      <div className="home">
         <h1>Tech Blog</h1>
         <div className="blog-by">MD Arif</div>
         {
          posts.map((post,index) => (
               <div className="post" key={`post-${index}`}> 
                  <Link to={`post/${post.id}`}>
                      <h2>{post.title}</h2>
                  </Link>
                  <p>{post.SubTitle}</p>
               </div>
          ))
         }
      </div>
    );
  }
  
  export default Home;





  