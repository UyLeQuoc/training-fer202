import logo from './logo.svg';
import './App.css';
import UserList from './pages/UserList';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from "./pages/Contact"
import Header from './components/Header';
import UserDetails from './pages/UserDetails';

function App() {

  // const router = createBrowserRouter([{
  //   path: "/",
  //   element: <HomePage />
  // }, {
  //   path: "/about",
  //   element: <AboutPage />
  // }, {
  //   path: "/contact",
  //   element: <Contact />
  // }])

  return (
    <div className="App">
      {/* <h1>My first React App</h1>
      <UserList /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/user" element={<UserList />}/>
          <Route path="/user/:id" element={<UserDetails />}/>
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
