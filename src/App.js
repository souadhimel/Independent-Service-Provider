import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Footer from './components/Pages/Footer/Footer';
import Header from './components/Pages/Header/Header';
import NotFound from './components/Pages/NotFound/NotFound';


function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
     <Route path="/"element={<Home></Home>}></Route>
     <Route path="/home"element={<Home></Home>}></Route>
     <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
    <Footer></Footer>
    </div>
   
  );
}

export default App;
