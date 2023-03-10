
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Header</Route>
        <Route path='/reviews' element={<Reviews></Reviews>}>Reviews</Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>Dashboard</Route>
        <Route path='/blogs' element={<Blogs></Blogs>}>Blogs</Route>
        <Route path='/about' element={<About></About>}>About</Route>
        <Route path='*' element={<NotFound></NotFound>}>Page Not Found</Route>
      </Routes>



    </div>
  );
}

export default App;
