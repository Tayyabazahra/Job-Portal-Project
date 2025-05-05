import React from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import { Routes,Route, BrowserRouter} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import JobDetails from './pages/JobDetails/JobDetails';
import JobApplication from './pages/JobApplication/JobApplication';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path='/jobs/application' element={<JobApplication />}></Route> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
