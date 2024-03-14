import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Favourites from './Components/Pages/Favourites/Favourites'
import Detail from './Components/Pages/Details/Deatil'
import Deatil from './Components/Pages/Details/Deatil';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favourite' element={<Favourites/>}/>
          <Route path='/Recipes/:id' element={<Detail/>} />
      </Routes>
   
    </div>
  );
}

export default App;
