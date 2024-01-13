import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route element={<Home/>} path='*'/>
        <Route element={<Detail/>} path='/details/:id'/>
      </Routes>
    </div>
  );
}

export default App;
