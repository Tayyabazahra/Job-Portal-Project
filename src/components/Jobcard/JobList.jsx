import React, { useEffect, useState } from "react";
import JobCard from "./Jobcard";
import './Jobcard.css'
const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/jobs")
      .then((response) => {
        console.log("Response Status:", response.status); // Check API response status
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Jobs:", data); // See if data is coming
        setJobs(data);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);
  
  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <JobCard key={job._id} job={job} index={index} />
        ))
      ) : (
        <p>Loading jobs...</p>
      )}
    </div>
  );
};

export default JobList;
