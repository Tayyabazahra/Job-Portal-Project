import React, { useState } from "react";
import axios from "axios";
import { FaFileAlt, FaTimesCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./JobApplication.css";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    jobTitle: "",
    location: "",
    cv: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{11}$/;
    const namePattern = /^[A-Za-z]+$/;
    let isValid = true;

    if (!formData.firstName || !namePattern.test(formData.firstName)) {
      toast.error("First name must contain only letters.", {
        position: "top-center",
        autoClose: 3000,
      });
      isValid = false;
    }
    if (!formData.lastName || !namePattern.test(formData.lastName)) {
      toast.error("Last name must contain only letters.", {
        position: "top-center",
        autoClose: 3000,
      });
      isValid = false;
    }
    if (!formData.email || !emailPattern.test(formData.email)) {
      toast.error("Invalid email address.", {
        position: "top-center",
        autoClose: 3000,
      });
      isValid = false;
    }
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      toast.error("Phone number must be 11 digits.", {
        position: "top-center",
        autoClose: 3000,
      });
      isValid = false;
    }
    if (!formData.experience) {
      toast.error("Experience is required.", {
        position: "top-center",
        autoClose: 3000,
      });
      isValid = false;
    }
    if (!formData.jobTitle) {
      toast.error("Job title is required.", {
        position: "top-center",
        autoClose: 3000,
      });
      isValid = false;
    }
    if (!formData.location) {
      toast.error("Location is required.", {
        position: "top-center",
        autoClose: 3000,
      });
      isValid = false;
    }
    if (!formData.cv) {
      toast.error("Please upload your CV.", {
        position: "top-center",
        autoClose: 3000,
      });
      isValid = false;
    }

    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, cv: file }));
      setUploadedFile({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(1) + " MB",
      });
    }
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
    setFormData((prev) => ({ ...prev, cv: null }));
    document.getElementById("cvInput").value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);
    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    try {
      await axios.post("http://localhost:8000/api/jobs/apply", submissionData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Application submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "",
        jobTitle: "",
        location: "",
        cv: null,
      });
      setUploadedFile(null);
    } catch (error) {
      toast.error(
        "Error submitting application: " +
          (error.response?.data || error.message), {
            position: "top-center",
            autoClose: 3000,
          }
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Job Application</h2>
      <hr />
      <p className="description">
        Fill in the form to apply for your desired job.
      </p>

      <div className="box">
        <form onSubmit={handleSubmit} className="form">
          {/* Full Name */}
          <div className="form-group">
            <label className="label">Full Name:</label>
            <div className="name">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="input"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="input"
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="input"
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label className="label">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="input"
            />
          </div>

          {/* Experience */}
          <div className="form-group">
            <label className="label">Experience (Years):</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Years of Experience"
              className="input"
            />
          </div>

          {/* Job Title */}
          <div className="form-group">
            <label className="label">Job Title:</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Enter Job Title"
              className="input"
            />
          </div>

          {/* Location */}
          <div className="form-group">
            <label className="label">Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Location"
              className="input"
            />
          </div>

          {/* CV Upload */}
          <div className="form-group">
            <label className="label">Upload Resume *</label>
            <input
              type="file"
              id="cvInput"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="cv-input"
            />
            <label htmlFor="cvInput" className="cv-box">
              <FaFileAlt className="file-icon" size={40} />
              <p>
                Drop files here or <span className="browse">Browse</span>
              </p>
              <p className="small-text">Max file size 4 MB (pdf, docx, png)</p>
            </label>

            {uploadedFile && (
              <div className="uploaded-file">
                <FaFileAlt className="file-icon" />
                <span>
                  {uploadedFile.name} - {uploadedFile.size}
                </span>
                <FaTimesCircle
                  className="remove-btn"
                  onClick={handleFileRemove}
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? "Submitting..." : "Apply Now"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default JobApplication;
