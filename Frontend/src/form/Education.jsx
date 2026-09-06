import { useFormContext, useFieldArray } from "react-hook-form";

const Education = () => {

  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education"
  });

  return (
    <div className="fields-container">

      {fields.map((field, index) => (

        <div className="dynamic-card" key={field.id}>

          <div className="dynamic-card-header">

            <div>
              <span className="entry-label">
                EDUCATION {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {field.degree || "Education"}
              </h3>
            </div>

            <button
              type="button"
              className="delete-btn"
              onClick={() => remove(index)}
            >
              ×
            </button>

          </div>


          <div className="field-grid two-columns">

            <div className="field-group">
              <label>Degree / Qualification</label>

              <input
                {...register(`education.${index}.degree`)}
                placeholder="B.Tech in Computer Science"
              />
            </div>


            <div className="field-group">
              <label>Institution</label>

              <input
                {...register(`education.${index}.institution`)}
                placeholder="University / College"
              />
            </div>

          </div>


          <div className="field-grid three-columns">

            <div className="field-group">
              <label>Location</label>

              <input
                {...register(`education.${index}.location`)}
                placeholder="City"
              />
            </div>


            <div className="field-group">
              <label>Start Year</label>

              <input
                {...register(`education.${index}.startDate`)}
                placeholder="2023"
              />
            </div>


            <div className="field-group">
              <label>End Year</label>

              <input
                {...register(`education.${index}.endDate`)}
                placeholder="2027"
              />
            </div>

          </div>


          <div className="field-grid two-columns">

            <div className="field-group">
              <label>Grade</label>

              <input
                {...register(`education.${index}.grade`)}
                placeholder="CGPA / Percentage"
              />
            </div>


            <div className="field-group">
              <label>Relevant Coursework</label>

              <input
                {...register(`education.${index}.coursework`)}
                placeholder="DSA, DBMS, OS, Computer Networks"
              />
            </div>

          </div>

        </div>

      ))}


      <button
        type="button"
        className="add-entry-btn"
        onClick={() =>
          append({
            degree: "",
            institution: "",
            location: "",
            startDate: "",
            endDate: "",
            grade: "",
            coursework: ""
          })
        }
      >
        <span>+</span>
        Add Education
      </button>


      {fields.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">+</div>

          <h3>Add your education</h3>

          <p>
            Add your degree, university and academic details.
          </p>
        </div>
      )}

    </div>
  );
};

export default Education;