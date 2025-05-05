import React, { useState, useEffect } from "react";
import JobList from "../../components/Jobcard/JobList";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import Navigation from "../../components/Navigation/Navigation";
import useJobStore from "../../store/jobStore";
import { JOBS_ROUTE } from "../../utils/constant";
import "./Home.css";

const Home = () => {
  const { jobs, setAllJobs, setJobs } = useJobStore();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(JOBS_ROUTE);
        const data = await response.json();
        setAllJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [setAllJobs]);

  const handleFilter = (filteredJobs) => {
    setJobs(filteredJobs);
  };
  console.log(jobs)
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <div className="navigation">
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="content-container">
        {/* Sidebar */}
        <Sidebar onFilter={handleFilter} />

        {/* Job List */}
        <div className="joblist-container">
          <JobList jobs={jobs} />
        </div>
      </div>
    </div>
  );
};

export default Home;
