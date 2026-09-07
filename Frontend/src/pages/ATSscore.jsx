import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar.jsx';
import '../styles/ATSstyles.css';

const ATSscore = () => {
    const [resume, setResume] = useState(null);
    const fileInputRef = useRef(null);
    const [jobDescription, setJobDescription] = useState('');
    const handleSubmit = async () => {
        if (!resume) {
            alert("Please upload your resume");
            return;
        }
        const formData = new FormData();
        formData.append("name", "Roshan");
        formData.append("email", "roshan@gmail.com");
        formData.append("resume", resume);
        formData.append("jobDescription", jobDescription);
        formData.append("type", resume.type);
        const response = await fetch("http://localhost:5000/api/ats_score", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        console.log("ATS Score:", data);
        console.log("Resume:", resume);
        console.log("Job Description:", jobDescription);
        console.log("Checking ATS Score...");
    };
    return (
        <div className="ats-page">
            <Navbar />
            <main className="ats-container">
                <section className="ats-header">
                    <span className="ats-badge">
                        AI POWERED
                    </span>
                    <h1>ATS Compatibility Checker</h1>
                    <p>
                        Check how well your resume matches a job description
                        and get actionable insights to improve your chances
                        of getting noticed by recruiters.
                    </p>
                </section>
                <section className="ats-input-section">
                    {/* Resume Upload */}
                    <div className="ats-card">

                        <div className="ats-card-header">
                            <h2>Upload Resume</h2>
                            <span>PDF / DOC / DOCX</span>
                        </div>

                        <div
                            className="resume-upload"
                            onClick={() => {
                                fileInputRef.current.click();
                            }}
                        >

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => {
                                    const file = e.target.files[0];

                                    if (file) {
                                        setResume(file);
                                    }
                                }}
                            />

                            <div className="upload-content">

                                {resume ? (
                                    <>
                                        <button
                                            type="button"
                                            className="remove-resume"
                                            onClick={(e) => {
                                                e.stopPropagation();

                                                setResume(null);
                                                fileInputRef.current.value = '';
                                            }}
                                        >
                                            ×
                                        </button>
                                        <div className="upload-icon">
                                            📄
                                        </div>
                                        <h3>{resume.name}</h3>
                                        <p>
                                            {(resume.size / 1024).toFixed(1)} KB
                                        </p>
                                        <span className="upload-hint">
                                            Click anywhere to replace
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <div className="upload-icon">
                                            ↑
                                        </div>
                                        <h3>
                                            Upload your resume
                                        </h3>
                                        <p>
                                            Click to browse or drag and drop
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Job Description */}
                    <div className="ats-card">

                        <div className="ats-card-header">
                            <h2>Job Description</h2>
                            <span>Optional</span>
                        </div>

                        <textarea
                            className="job-description"
                            placeholder="Paste the job description here..."
                            value={jobDescription}
                            onChange={(e) => {
                                setJobDescription(e.target.value);
                            }}
                        />
                        <div className="character-count">
                            {jobDescription.length} characters
                        </div>
                    </div>
                </section>
                {/* Analyze Button */}
                <div className="ats-action">
                    <button
                        className="check-ats-btn"
                        onClick={handleSubmit}>
                        Check ATS Score
                        <span>→</span>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ATSscore;