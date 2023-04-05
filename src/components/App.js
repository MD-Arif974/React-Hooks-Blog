import {Routes,Route} from 'react-router-dom';
import {CreatePost,PostDetails,Home,Navbar} from './';


function App() {
  return (
    <div className="container">
   
      <Navbar />
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route  path = "/post/:postId" element = {<PostDetails />} />
          <Route  path = "/create-post" element = {<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
