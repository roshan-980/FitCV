import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import Navbar from "../components/Navbar.jsx";
import ResumePreview from "../components/Livepreview.jsx";

import PersonalInfo from "../form/personalinfo.jsx";
import Education from "../form/Education.jsx";
import Experience from "../form/Exp.jsx";
import Projects from "../form/Projects.jsx";
import Skills from "../form/Skills.jsx";
import Achievements from "../form/Achievements.jsx";
import Certifications from "../form/Certifications.jsx";

import "../styles/builder.css";
import "../styles/form.css";
import "../styles/preview.css";

const Builder = () => {

    const methods = useForm({
        defaultValues: {
            personal: {
                name: "",
                title: "",
                email: "",
                phone: "",
                location: "",
                linkedin: "",
                github: "",
                portfolio: "",
                summary: ""
            },

            education: [],

            experience: [],

            projects: [],

            skills: [],

            achievements: [],

            certifications: []
        }
    });

    const [step, setStep] = useState(0);

    const totalSteps = [
        {
            component: PersonalInfo,
            title: "Personal Information",
            shortTitle: "Personal"
        },
        {
            component: Education,
            title: "Education",
            shortTitle: "Education"
        },
        {
            component: Experience,
            title: "Experience",
            shortTitle: "Experience"
        },
        {
            component: Projects,
            title: "Projects",
            shortTitle: "Projects"
        },
        {
            component: Skills,
            title: "Skills",
            shortTitle: "Skills"
        },
        {
            component: Achievements,
            title: "Achievements",
            shortTitle: "Achievements"
        },
        {
            component: Certifications,
            title: "Certifications",
            shortTitle: "Certifications"
        }
    ];

    const CurrentStep = totalSteps[step].component;

    const onSubmit = (data) => {
        console.log("Resume Data:", data);
    };

    const nextStep = () => {
        if (step < totalSteps.length - 1) {
            setStep(prev => prev + 1);
        }
    };

    const previousStep = () => {
        if (step > 0) {
            setStep(prev => prev - 1);
        }
    };

    return (
        <div className="builder-page">

            <Navbar />

            <FormProvider {...methods}>

                <div className="builder-container">

                    {/* LEFT SIDE */}
                    <section className="builder-editor">

                        <div className="builder-header">

                            <div>
                                <span className="builder-eyebrow">
                                    RESUME BUILDER
                                </span>

                                <h1>Build your resume</h1>

                                <p>
                                    Create a professional resume step by step.
                                </p>
                            </div>

                            <div className="step-count">
                                <span>{step + 1}</span>
                                <small>/ {totalSteps.length}</small>
                            </div>

                        </div>


                        {/* Progress */}
                        <div className="progress-container">

                            {totalSteps.map((item, index) => (

                                <div
                                    key={item.shortTitle}
                                    className={`progress-step ${index === step
                                            ? "active"
                                            : index < step
                                                ? "completed"
                                                : ""
                                        }`}
                                >

                                    <div className="progress-dot">
                                        {index < step ? "✓" : index + 1}
                                    </div>

                                    <span>{item.shortTitle}</span>

                                </div>

                            ))}

                        </div>


                        {/* FORM */}
                        <form
                            className="resume-form"
                            onSubmit={methods.handleSubmit(onSubmit)}
                        >

                            <div className="form-card">

                                <div className="form-card-header">

                                    <div>
                                        <span className="section-number">
                                            STEP {String(step + 1).padStart(2, "0")}
                                        </span>

                                        <h2>{totalSteps[step].title}</h2>
                                    </div>

                                </div>

                                <CurrentStep />

                            </div>


                            {/* Navigation */}
                            <div className="form-navigation">

                                <button
                                    type="button"
                                    className="nav-btn previous-btn"
                                    onClick={previousStep}
                                    disabled={step === 0}
                                >
                                    <span>←</span>
                                    Previous
                                </button>


                                {step < totalSteps.length - 1 ? (

                                    <button
                                        type="button"
                                        className="nav-btn next-btn"
                                        onClick={nextStep}
                                    >
                                        Continue
                                        <span>→</span>
                                    </button>

                                ) : (

                                    <button
                                        type="submit"
                                        className="nav-btn next-btn"
                                    >
                                        Save Resume
                                        <span>✓</span>
                                    </button>

                                )}

                            </div>

                        </form>

                    </section>


                    {/* RIGHT SIDE */}
                    <section className="builder-preview">

                        <div className="preview-topbar">

                            <div>
                                <span className="preview-label">
                                    LIVE PREVIEW
                                </span>

                                <h3>Your Resume</h3>
                            </div>

                            <div className="live-status">
                                <span></span>
                                Live
                            </div>

                        </div>

                        <ResumePreview />

                    </section>

                </div>

            </FormProvider>

        </div>
    );
};

export default Builder;