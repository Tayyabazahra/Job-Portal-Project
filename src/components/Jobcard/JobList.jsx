import React, { useState } from "react";
import JobCard from "./Jobcard";
import { Link } from "react-router-dom";
import { Pagination} from "@mui/material";
import "./JobCard.css";

const JobList = ({ jobs }) => {
  const [page, setPage] = useState(1);
  const jobsPerPage = 30;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedJobs = jobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );

  return (
    <>
    <div className="job-list">
      {jobs.length > 0 ? (
        <>
          {paginatedJobs.map((job, index) => (
            <Link
              key={job._id}
              to={`/jobs/${job._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <JobCard job={job} index={index} />
            </Link>
          ))}
        </>
      ) : (
        <p>Loading Jobs</p>
      )}
      </div>


      <div
        style={{
          display: "block",
          justifyContent: "center",
          marginTop: "24px",
          width: "100%", 
          marginTop: "80px",
          marginBottom: "100px",      
        }}
      >
          <Pagination
          count={Math.ceil(jobs.length / jobsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
          siblingCount={1}
          boundaryCount={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            ".MuiPaginationItem-root": {
              width: "35px",
              height: "40px",
              margin: "6px",
              borderRadius: "6px",
              fontSize: "0.875rem",
              fontWeight: "bold",
              backgroundColor: "#fff",
              color: "#222", // lighter text color
              border: "1px solid #222", // lighter border
              "&.Mui-selected": {
                backgroundColor: "#222", // softer than black
                color: "#fff",
                border: "1px solid #222",
              },
            
            },
          }}
          
          
        />
        </div>


      </>
);
};

export default JobList;
