import React from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import { Routes,Route, BrowserRouter} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import JobCard from './components/Jobcard/Jobcard';
import JobDetails from './pages/JobDetails/JobDetails';


function App() {
  let job={"_id":{"$oid":"67cb5e524d7f0d6d74daa33c"},"jobId":"1","experience":"5 to 15 Years","qualifications":"M.Tech","salaryRange":"$59K-$99K","location":"Douglas","country":"Isle of Man","workType":"Intern","company":"Icahn Enterprises","companySize":"26801","preference":"Female","jobTitle":"Digital Marketing Specialist","jobDescription":"Social Media Managers oversee an organizations social media presence. They create and schedule content, engage with followers, and analyze social media metrics to drive brand awareness and engagement.","benefits":"{'Flexible Spending Accounts (FSAs), Relocation Assistance, Legal Assistance, Employee Recognition Programs, Financial Counseling'}","skills":"Social media platforms (e.g., Facebook, Twitter, Instagram) Content creation and scheduling Social media analytics and insights Community engagement Paid social advertising","responsibilities":"Manage and grow social media accounts, create engaging content, and interact with the online community. Develop social media content calendars and strategies. Monitor social media trends and engagement metrics.","__v":{"$numberInt":"0"}}
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
