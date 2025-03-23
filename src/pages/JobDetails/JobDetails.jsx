import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./JobDetails.css";
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const colors = ["#e3dbfa", "#fbe2f4", "#ffe1cc", "#d4f6ed"];

const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [similarJobs, setSimilarJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch job details
    fetch(`http://localhost:8000/api/jobs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Job not found");
        return res.json();
      })
      .then((data) => setJob(data))
      .catch((err) => setError(err.message));

    // Fetch similar jobs
    fetch(`http://localhost:8000/api/jobs/${id}/similar`)
      .then((res) => res.json())
      .then((data) => setSimilarJobs(data))
      .catch(() => setSimilarJobs([]));

    setLoading(false);
  }, [id]);

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p className="error">{error}</p>;

  if (!job) return <p>No job found.</p>;

  const skillsList = job.skills ? job.skills.split(", ") : [];

  return (
    <div id="jobdetails" className="section-p1">
      {/* Job Details */}
      <div className="single-job-details">
        <h2 className="job-title">{job.jobTitle}</h2>
        <p className="company-info">
          <FaBriefcase /> {job.company} <FaMapMarkerAlt /> {job.location},{" "}
          {job.country}
        </p>
        <div className="job-info">
          <p className="info">
            <strong>Experience:</strong> {job.experience}
          </p>
          <p className="info">
            <strong>Work Type:</strong> {job.workType}
          </p>
          <p className="info">
            <strong>Preference:</strong> {job.preference}
          </p>
          <p className="info">
            <strong>Salary Range:</strong> <FaDollarSign /> {job.salaryRange}
          </p>
        </div>

        <div className="job-section">
          <h3>Job Description</h3>
          <p>{job.jobDescription}</p>
        </div>

        <div className="job-section">
          <h3>Responsibilities</h3>
          <p>{job.responsibilities}</p>
        </div>

        <div className="job-section">
          <h3>Qualifications</h3>
          <p>{job.qualifications}</p>
        </div>

        <div className="job-section">
          <h3>Skills Required</h3>
          <ul className="skills">
            {skillsList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="job-section">
          <h3>Benefits</h3>
          <p>{job.benefits.replace(/[{}]/g, "")}</p>
        </div>

        <Link to={"/jobs/application"}><button className="apply-button">Apply Now</button></Link>
      </div>

      {/* Similar Jobs */}
      <div className="similar-jobs">
        <h3>Similar Jobs</h3>
        <div className="similar-jobs-list">
          {similarJobs.length > 0 ? (
            similarJobs.map((similarJob, index) => (
              <div
                key={index}
                className="cardcontainer"
                onClick={() => navigate(`/jobs/${similarJob._id}`)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="coloredcontainer"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  <p>{similarJob.country}</p>
                  <h2>{similarJob.jobTitle}</h2>
                  <p>{similarJob.company}</p>
                  <div className="properties-container">
                    <div className="prop">
                      <p>{similarJob.workType}</p>
                    </div>
                    <div className="prop">
                      <p>{similarJob.location}</p>
                    </div>
                  </div>
                </div>
                <div className="desc">
                  <p className="salary">{similarJob.salaryRange}</p>
                  <Link to={`/jobs/${similarJob._id}`}>
                    <button>Details</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No similar jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
