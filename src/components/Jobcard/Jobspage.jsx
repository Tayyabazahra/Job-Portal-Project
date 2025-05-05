import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import JobList from "./JobList";

const JobsPage = () => {
  const [filteredJobs, setFilteredJobs] = useState([]);

  return (
    <div className="jobs-page">
      <Sidebar setFilteredJobs={setFilteredJobs} />
      <JobList filteredJobs={filteredJobs} />
    </div>
  );
};

export default JobsPage;
