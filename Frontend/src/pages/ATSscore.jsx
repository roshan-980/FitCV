import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar.jsx';
import '../styles/ATSstyles.css';

const ATSscore = () => {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [atsResult, setAtsResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef(null);

    const handleSubmit = async () => {
        if (!resume) {
            alert("Please upload your resume");
            return;
        }

        try {
            setLoading(true);
            setAtsResult(null);

            const formData = new FormData();
            formData.append("name", "Roshan");
            formData.append("email", "roshan@gmail.com");
            formData.append("resume", resume);
            formData.append("jobDescription", jobDescription);
            formData.append("type", resume.type);

            const response = await fetch(
                "http://localhost:5000/api/ats_score",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to analyze resume"
                );
            }

            console.log("ATS Score:", data);
            setAtsResult(data.desc);
        } catch (error) {
            console.error("ATS Error:", error);
            alert(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ats-page">
            <Navbar />

            <main className="ats-container">
                <section className="ats-header">
                    <span className="ats-badge">AI POWERED</span>

                    <h1>ATS Compatibility Checker</h1>

                    <p>
                        Check how well your resume matches a job description
                        and get actionable insights to improve your chances
                        of getting noticed by recruiters.
                    </p>
                </section>

                <section className="ats-input-section">
                    <div className="ats-card">
                        <div className="ats-card-header">
                            <h2>Upload Resume</h2>
                            <span>PDF / DOC / DOCX</span>
                        </div>

                        <div
                            className="resume-upload"
                            onClick={() => fileInputRef.current.click()}
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

                                        <div className="upload-icon">📄</div>

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
                                        <div className="upload-icon">↑</div>

                                        <h3>Upload your resume</h3>

                                        <p>
                                            Click to browse or drag and drop
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

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

                <div className="ats-action">
                    <button
                        className="check-ats-btn"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="ats-spinner"></span>
                                Analyzing...
                            </>
                        ) : (
                            <>
                                Check ATS Score
                                <span>→</span>
                            </>
                        )}
                    </button>
                </div>

                {atsResult && (
                    <section className="ats-result">
                        <div
                            className="score-card"
                            style={{
                                "--score": atsResult.overallScore
                            }}
                        >
                            <div className="score-left">
                                <span className="result-label">
                                    ATS COMPATIBILITY
                                </span>

                                <h2>
                                    {atsResult.overallScore}
                                    <span>/100</span>
                                </h2>

                                <p>{atsResult.summary}</p>
                            </div>

                            <div className="score-circle">
                                <div className="score-circle-inner">
                                    <strong>
                                        {atsResult.overallScore}
                                    </strong>

                                    <span>SCORE</span>
                                </div>
                            </div>
                        </div>

                        <div className="result-card">
                            <div className="result-card-header">
                                <h2>Score Breakdown</h2>
                                <span>5 categories</span>
                            </div>

                            <div className="score-breakdown">
                                <ScoreBar
                                    title="Resume Quality"
                                    score={atsResult.resumeQualityScore}
                                />

                                <ScoreBar
                                    title="Skills Match"
                                    score={atsResult.skillsMatchScore}
                                />

                                <ScoreBar
                                    title="Experience Match"
                                    score={atsResult.experienceMatchScore}
                                />

                                <ScoreBar
                                    title="Role Alignment"
                                    score={atsResult.roleAlignmentScore}
                                />

                                <ScoreBar
                                    title="Keyword Match"
                                    score={atsResult.keywordMatchScore}
                                />
                            </div>
                        </div>

                        <div className="result-grid">
                            <SkillResultCard
                                title="Matched Skills"
                                skills={atsResult.matchedSkills}
                                type="matched"
                            />

                            <SkillResultCard
                                title="Missing Skills"
                                skills={atsResult.missingSkills}
                                type="missing"
                            />
                        </div>

                        <div className="result-grid">
                            <SkillResultCard
                                title="Preferred Skills"
                                skills={atsResult.preferredSkills}
                                type="preferred"
                            />

                            <SkillResultCard
                                title="Missing Preferred Skills"
                                skills={atsResult.missingPreferredSkills}
                                type="missing"
                            />
                        </div>

                        <div className="result-grid">
                            <ListResultCard
                                title="Strengths"
                                items={atsResult.strengths}
                                type="strength"
                            />

                            <ListResultCard
                                title="Weaknesses"
                                items={atsResult.weaknesses}
                                type="weakness"
                            />
                        </div>

                        <div className="result-card">
                            <div className="result-card-header">
                                <h2>How to Improve</h2>
                                <span>AI Recommendations</span>
                            </div>

                            <div className="improvement-list">
                                {atsResult.improvements?.map((item, index) => (
                                    <div
                                        className="improvement-item"
                                        key={index}
                                    >
                                        <span className="improvement-number">
                                            {index + 1}
                                        </span>

                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {atsResult.atsIssues?.length > 0 && (
                            <div className="result-card">
                                <div className="result-card-header">
                                    <h2>ATS Issues</h2>
                                    <span>Needs attention</span>
                                </div>

                                <div className="issue-list">
                                    {atsResult.atsIssues.map((issue, index) => (
                                        <div
                                            className="issue-item"
                                            key={index}
                                        >
                                            <span>!</span>
                                            <p>{issue}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="result-card recruiter-card">
                            <div className="result-card-header">
                                <h2>Recruiter View</h2>
                                <span>AI Evaluation</span>
                            </div>

                            <p className="recruiter-feedback">
                                {atsResult.recruiterFeedback}
                            </p>

                            <div className="recommendation">
                                <strong>Final Recommendation</strong>

                                <p>
                                    {atsResult.finalRecommendation}
                                </p>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

const ScoreBar = ({ title, score }) => {
    return (
        <div className="score-bar">
            <div className="score-bar-top">
                <span>{title}</span>
                <strong>{score}</strong>
            </div>

            <div className="score-track">
                <div
                    className="score-fill"
                    style={{ width: `${score}%` }}
                />
            </div>
        </div>
    );
};

const SkillResultCard = ({ title, skills, type }) => {
    return (
        <div className="result-card">
            <div className="result-card-header">
                <h2>{title}</h2>
                <span>{skills?.length || 0}</span>
            </div>

            <div className="skill-result-list">
                {skills?.length > 0 ? (
                    skills.map((skill, index) => (
                        <span
                            className={`result-skill ${type}`}
                            key={index}
                        >
                            {skill}
                        </span>
                    ))
                ) : (
                    <p className="empty-result">
                        None identified
                    </p>
                )}
            </div>
        </div>
    );
};

const ListResultCard = ({ title, items, type }) => {
    return (
        <div className="result-card">
            <div className="result-card-header">
                <h2>{title}</h2>
            </div>

            <div className="result-list">
                {items?.map((item, index) => (
                    <div
                        className={`result-list-item ${type}`}
                        key={index}
                    >
                        <span>
                            {type === "strength" ? "✓" : "!"}
                        </span>

                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ATSscore;