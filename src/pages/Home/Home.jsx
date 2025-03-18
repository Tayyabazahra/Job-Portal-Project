import React from "react";
import JobList from "../../components/Jobcard/JobList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navigation from "../../components/Navigation/Navigation";
import "./Home.css"; // Import CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Fixed Navigation */}
      <Navigation />

      <div className="content-container">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Scrollable Job List */}
        <div className="joblist-container">
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default Home;
