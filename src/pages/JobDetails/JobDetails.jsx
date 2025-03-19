import React from "react";

const JobDetails = ({ job }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{job.jobTitle}</h2>
      <p className="text-gray-700 text-lg font-semibold">{job.company} - {job.location}, {job.country}</p>
      <p className="text-gray-600 text-sm">Company Size: {job.companySize}</p>
      <p className="text-gray-600 text-sm">Experience: {job.experience}</p>
      <p className="text-gray-600 text-sm">Work Type: {job.workType}</p>
      <p className="text-gray-600 text-sm">Preference: {job.preference}</p>
      <p className="text-gray-600 text-sm">Salary Range: {job.salaryRange}</p>
      
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Job Description</h3>
        <p className="text-gray-700">{job.jobDescription}</p>
      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Responsibilities</h3>
        <p className="text-gray-700">{job.responsibilities}</p>
      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Qualifications</h3>
        <p className="text-gray-700">{job.qualifications}</p>
      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Skills Required</h3>
        <p className="text-gray-700">{job.skills}</p>
      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Benefits</h3>
        <p className="text-gray-700">{job.benefits.replace(/[{}]/g, '')}</p>
      </div>
      
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
        Apply for this Job
      </button>
    </div>
  );
};

export default JobDetails;
