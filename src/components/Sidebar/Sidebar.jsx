import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    employmentType: [],
    experience: "",
    preference: [],
    qualifications: "",
  });

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value],
    }));
  };

  const handleSelectChange = (category, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [category]: value }));
  };

  const experienceRanges = [
    { label: "0-2 years", min: 0, max: 2 },
    { label: "3-5 years", min: 3, max: 5 },
    { label: "6+ years", min: 6, max: 14 },
  ];

  const handleExperienceChange = (range) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      experience: `${range.min} to ${range.max}`,
    }));
  };

  const applyFilters = async () => {
    const queryParams = new URLSearchParams();

    if (filters.employmentType.length > 0) {
      queryParams.append("employmentType", filters.employmentType.join(","));
    }
    if (filters.experience) {
      queryParams.append("experience", filters.experience);
    }
    if (filters.preference.length > 0) {
      queryParams.append("preference", filters.preference.join(","));
    }
    if (filters.qualifications) {
      queryParams.append("qualifications", filters.qualifications);
    }

    const apiUrl = `http://localhost:8000/api/jobs/filter?${queryParams.toString()}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      onFilter(data); // Pass data to parent component
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Filters</h2>

      {/* Employment Type */}
      <div className="filter-section">
        <h3 className="filter-title">Employment Type</h3>
        {["Full-Time", "Temporary", "Intern", "Contract"].map((type) => (
          <label key={type} className="filter-label">
            <input
              type="checkbox"
              className="filter-checkbox"
              onChange={() => handleCheckboxChange("employmentType", type)}
              checked={filters.employmentType.includes(type)}
            />
            {type}
          </label>
        ))}
      </div>

      {/* Experience */}
      <div className="filter-section">
        <h3 className="filter-title">Experience</h3>
        {experienceRanges.map((exp) => (
          <label key={exp.label} className="filter-label">
            <input
              type="radio"
              className="filter-checkbox"
              name="experience"
              onChange={() => handleExperienceChange(exp)}
              checked={filters.experience === `${exp.min} to ${exp.max}`}
            />
            {exp.label}
          </label>
        ))}
      </div>

      {/* Preference */}
      <div className="filter-section">
        <h3 className="filter-title">Preference</h3>
        {["Male", "Female"].map((pref) => (
          <label key={pref} className="filter-label">
            <input
              type="checkbox"
              className="filter-checkbox"
              onChange={() => handleCheckboxChange("preference", pref)}
              checked={filters.preference.includes(pref)}
            />
            {pref}
          </label>
        ))}
      </div>

      {/* Qualifications */}
      <div className="filter-section">
        <h3 className="filter-title">Qualifications</h3>
        <select
          className="filter-dropdown"
          value={filters.qualifications}
          onChange={(e) => handleSelectChange("qualifications", e.target.value)}
        >
          <option value="">Select qualification</option>
          <option value="BCA">BCA</option>
          <option value="MBA">MBA</option>
          <option value="PhD">PhD</option>
          <option value="BA">BA</option>
          <option value="M.Tech">M.Tech</option>
          <option value="M.Com">M.Com</option>
        </select>
      </div>

      {/* Apply Button */}
      <button className="button" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default Sidebar;
