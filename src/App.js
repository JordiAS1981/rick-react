import './App.css';
import { ApiProvider } from './context/context';
import Characters from './pages/Characters/Characters';
import Navbar from './navigation/NavBar';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {

  return (
    <Router>
      <div>
        <Navbar ></Navbar>
        <ApiProvider>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/characters' element={<Characters/>}></Route>
          </Routes>
        </ApiProvider>
      </div>
    </Router>
  );
}

export default App;