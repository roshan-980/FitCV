import { useFormContext } from "react-hook-form";

const ResumePreview = () => {
  const { watch } = useFormContext();

  const data = watch();
  const personal = data.personal || {};

  return (
    <div className="resume-preview">

      <div className="resume-paper">

        {/* HEADER */}
        {(personal.name ||
          personal.title ||
          personal.email ||
          personal.phone ||
          personal.location) && (

          <header className="resume-header">

            <h1>
              {personal.name || "Your Name"}
            </h1>

            {personal.title && (
              <div className="resume-title">
                {personal.title}
              </div>
            )}

            <div className="resume-contact">
              {personal.email && (
                <span>{personal.email}</span>
              )}

              {personal.phone && (
                <span>{personal.phone}</span>
              )}

              {personal.location && (
                <span>{personal.location}</span>
              )}
            </div>

            <div className="resume-links">
              {personal.linkedin && (
                <span>{personal.linkedin}</span>
              )}

              {personal.github && (
                <span>{personal.github}</span>
              )}

              {personal.portfolio && (
                <span>{personal.portfolio}</span>
              )}
            </div>

          </header>
        )}


        {/* SUMMARY */}
        {personal.summary && (
          <section className="resume-section">
            <h2>Summary</h2>
            <p>{personal.summary}</p>
          </section>
        )}


        {/* EDUCATION */}
        {data.education?.length > 0 && (
          <section className="resume-section">

            <h2>Education</h2>

            {data.education.map((education, index) => (
              <div
                className="resume-entry"
                key={index}
              >

                <div className="resume-entry-top">

                  <div>
                    <h3>
                      {education.degree}
                    </h3>

                    <strong>
                      {education.institution}
                    </strong>
                  </div>

                  <div className="resume-date">
                    {education.startDate}

                    {education.startDate &&
                      education.endDate &&
                      " – "}

                    {education.endDate}
                  </div>

                </div>

                {education.location && (
                  <div className="resume-muted">
                    {education.location}
                  </div>
                )}

                {education.grade && (
                  <div className="resume-muted">
                    {education.grade}
                  </div>
                )}

                {education.coursework && (
                  <p>
                    <strong>Coursework:</strong>{" "}
                    {education.coursework}
                  </p>
                )}

              </div>
            ))}

          </section>
        )}


        {/* EXPERIENCE */}
        {data.experience?.length > 0 && (
          <section className="resume-section">

            <h2>Experience</h2>

            {data.experience.map((experience, index) => (
              <div
                className="resume-entry"
                key={index}
              >

                <div className="resume-entry-top">

                  <div>
                    <h3>
                      {experience.jobTitle}
                    </h3>

                    <strong>
                      {experience.company}
                    </strong>
                  </div>

                  <div className="resume-date">
                    {experience.startDate}

                    {experience.startDate &&
                      experience.endDate &&
                      " – "}

                    {experience.endDate}
                  </div>

                </div>

                {experience.location && (
                  <div className="resume-muted">
                    {experience.location}
                  </div>
                )}

                {experience.description && (
                  <p>
                    {experience.description}
                  </p>
                )}

              </div>
            ))}

          </section>
        )}


        {/* PROJECTS */}
        {data.projects?.length > 0 && (
          <section className="resume-section">

            <h2>Projects</h2>

            {data.projects.map((project, index) => (
              <div
                className="resume-entry"
                key={index}
              >

                <div className="resume-entry-top">

                  <h3>
                    {project.name}
                  </h3>

                  <div className="project-links">

                    {project.github && (
                      <span>GitHub</span>
                    )}

                    {project.liveDemo && (
                      <span>Live</span>
                    )}

                  </div>

                </div>

                {project.description && (
                  <p>
                    {project.description}
                  </p>
                )}

                {project.technologies && (
                  <div className="resume-tech">
                    {project.technologies}
                  </div>
                )}

                {project.highlights && (
                  <p>
                    {project.highlights}
                  </p>
                )}

              </div>
            ))}

          </section>
        )}


        {/* SKILLS */}
        {data.skills?.length > 0 && (
          <section className="resume-section">

            <h2>Skills</h2>

            <div className="resume-skills">

              {data.skills.map((skill, index) => (
                <span
                  className="resume-skill"
                  key={index}
                >
                  {skill.name}
                </span>
              ))}

            </div>

          </section>
        )}


        {/* ACHIEVEMENTS */}
        {data.achievements?.length > 0 && (
          <section className="resume-section">

            <h2>Achievements</h2>

            {data.achievements.map((achievement, index) => (
              <div
                className="resume-entry"
                key={index}
              >

                <div className="resume-entry-top">

                  <h3>
                    {achievement.title}
                  </h3>

                  <div className="resume-date">
                    {achievement.date}
                  </div>

                </div>

                {achievement.description && (
                  <p>
                    {achievement.description}
                  </p>
                )}

              </div>
            ))}

          </section>
        )}


        {/* CERTIFICATIONS */}
        {data.certifications?.length > 0 && (
          <section className="resume-section">

            <h2>Certifications</h2>

            {data.certifications.map((certification, index) => (
              <div
                className="resume-entry"
                key={index}
              >

                <div className="resume-entry-top">

                  <div>

                    <h3>
                      {certification.name}
                    </h3>

                    <strong>
                      {certification.issuer}
                    </strong>

                  </div>

                  <div className="resume-date">
                    {certification.date}
                  </div>

                </div>

                {certification.url && (
                  <div className="project-links">
                    {certification.url}
                  </div>
                )}

              </div>
            ))}

          </section>
        )}

      </div>

    </div>
  );
};

export default ResumePreview;