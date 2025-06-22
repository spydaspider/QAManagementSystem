
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InstructorDashboard from './components/instructorDashboard';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element = {<InstructorDashboard/>}/>
                  

      </Routes>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
