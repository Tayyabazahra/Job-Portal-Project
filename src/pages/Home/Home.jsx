import React from "react";
import JobList from "../../components/Jobcard/JobList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navigation from "../../components/Navigation/Navigation";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />

      <div className="content-container">
        <Sidebar />

        <div className="joblist-container">
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default Home;
