
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Home';
import { Registration } from './Registration';
import { Mapping } from './Mapping';
import Filter from './Filter';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        <Route path='' element= { <Home/>}/>
        <Route path='/Registration' element={<Registration/>}/>
    <Route   path='/Mapping' element={<Mapping/>}/>
    <Route   path='/Filter' element={<Filter/>}/>
          
       
      </Routes>
      </BrowserRouter>
     
     
  
    </div>
  );
}

export default App;
