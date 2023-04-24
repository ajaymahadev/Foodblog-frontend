import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/signUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/signIn';
import Home from './components/home';
import About from './components/about';
import Addpost from './components/addpost';
import Navbar from './components/navbar';
import Foods from './components/foods';
import Posts from './components/posts';
import Singlepost from './components/singlepost';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route element={<SignUp />} path='/signup' />
          <Route element={<SignIn />} path='/' />
          {/* <Route element={<Admin/>} path="/admin" /> */}
          <Route element={<Home />} path='/homePage' />
          <Route element={<About />} path='/aboutPage' />
          <Route element={<Addpost />} path='/addpost' />
          <Route element={<Navbar />} path='/navbar' />
          <Route element={<Foods />} path='/foods' />
          <Route element={<Posts/>} path='/posts' />
          <Route element={<Singlepost/>} path='/posts/:id' />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
