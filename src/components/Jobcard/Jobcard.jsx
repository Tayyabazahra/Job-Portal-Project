import React from "react";
import './Jobcard.css'
import '../../fonts.css'


const colors = ["#e3dbfa", "#fbe2f4", "#ffe1cc", "#d4f6ed"];

const JobCard = ({ job, index,  }) => {
  return (
    <div className="cardcontainer" >
      <div
        className="coloredcontainer"
        style={{ backgroundColor: colors[index % colors.length] }}
      >
      <p>{job.country}</p>
      <h2>{job.jobTitle}</h2>
      <p>{job.company}</p>
      <div className="properties-container">
        <div className="prop"><p>{job. workType}</p></div>
        <div className="prop"><p>{job.location}</p></div>
      </div>
      </div>
       <div className="desc">    
      <p className="salary">{job.salaryRange}</p>     
      <button>Details</button>
      </div>  
    </div>
  );
};

export default JobCard;
