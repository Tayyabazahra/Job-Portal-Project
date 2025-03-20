import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import './JobCard.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <Link key={job._id} to={`/jobs/${job._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <JobCard job={job} index={index} />
          </Link>
        ))
      ) : (
        <p>Loading jobs...</p>
      )}
    </div>
  );
};

export default JobList;
