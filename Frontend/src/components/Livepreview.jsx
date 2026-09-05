import { useFormContext } from "react-hook-form";

function ResumePreview() {

  const { watch } = useFormContext();

  const formData = watch();

  return (
    <div className="resume-preview">

      {/* Personal Information */}
      <div className="personal-section">

        <h1>{formData.name}</h1>

        <p>{formData.email}</p>

        <p>{formData.phone}</p>

        <p>{formData.location}</p>

        <p>{formData.linkedin}</p>

        <p>{formData.github}</p>

        <p>{formData.portfolio}</p>

      </div>


      {/* Summary */}
      {formData.summary && (
        <div className="resume-section">

          <h2>Summary</h2>

          <p>{formData.summary}</p>

        </div>
      )}


      {/* Education */}
      <div className="resume-section">

        <h2>Education</h2>

        <h3>{formData.degree}</h3>

        <p>{formData.institution}</p>

        <p>{formData.location}</p>

        <p>
          {formData.startDate} - {formData.endDate}
        </p>

        <p>{formData.grade}</p>

        <p>{formData.coursework}</p>

      </div>


      {/* Experience */}
      <div className="resume-section">

        <h2>Experience</h2>

        <h3>{formData.jobTitle}</h3>

        <p>{formData.company}</p>

        <p>{formData.location}</p>

        <p>
          {formData.startDate} - {formData.endDate}
        </p>

        <p>{formData.description}</p>

      </div>


      {/* Projects */}
      <div className="resume-section">

        <h2>Projects</h2>

        <h3>{formData.projectName}</h3>

        <p>{formData.projectDescription}</p>

        <p>{formData.technologies}</p>

        <p>{formData.github}</p>

        <p>{formData.liveDemo}</p>

        <p>{formData.projectHighlights}</p>

      </div>


      {/* Skills */}
      <div className="resume-section">

        <h2>Skills</h2>

        <p>{formData.skills}</p>

      </div>


      {/* Achievements */}
      <div className="resume-section">

        <h2>Achievements</h2>

        <h3>{formData.achievementTitle}</h3>

        <p>{formData.achievementDescription}</p>

        <p>{formData.achievementDate}</p>

      </div>


      {/* Certifications */}
      <div className="resume-section">

        <h2>Certifications</h2>

        <h3>{formData.certificationName}</h3>

        <p>{formData.certificationOrganization}</p>

        <p>{formData.certificationDate}</p>

        <p>{formData.certificationUrl}</p>

      </div>


      {/* Languages
      <div className="resume-section">

        <h2>Languages</h2>

        <p>{formData.languages}</p>

        <p>{formData.languageProficiency}</p>

      </div> */}

    </div>
  );
}

export default ResumePreview;