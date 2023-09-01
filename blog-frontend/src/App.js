import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignUp from "./pages/authentication/signup/SignUp";
import Login from "./pages/authentication/login/Login";
import CreateBlogPage from "./pages/blog/createBlog/CreateBlogPage";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/create' element={<CreateBlogPage/>}></Route>


      </Routes>
    </>
  );
}

export default App;
