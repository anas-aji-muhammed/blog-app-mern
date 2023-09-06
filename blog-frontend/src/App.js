import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignUp from "./pages/authentication/signup/SignUp";
import Login from "./pages/authentication/login/Login";
import CreateBlogPage from "./pages/blog/createBlog/CreateBlogPage";
import BlogDetails from "./pages/blog/components/blogDetails/BlogDetails"
import './utils/globalStyles.css'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/create' element={<CreateBlogPage/>}></Route>
        <Route path='/blogDetails' element={<BlogDetails/>}></Route>

      </Routes>
    </>
  );
}

export default App;
