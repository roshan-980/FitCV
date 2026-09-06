import { useFormContext, useFieldArray } from "react-hook-form";

const Experience = () => {

  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience"
  });

  return (
    <div className="fields-container">

      {fields.map((field, index) => (

        <div className="dynamic-card" key={field.id}>

          <div className="dynamic-card-header">

            <div>
              <span className="entry-label">
                EXPERIENCE {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {field.jobTitle || "Work Experience"}
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
              <label>Job Title</label>

              <input
                {...register(`experience.${index}.jobTitle`)}
                placeholder="Software Engineer Intern"
              />
            </div>


            <div className="field-group">
              <label>Company / Organization</label>

              <input
                {...register(`experience.${index}.company`)}
                placeholder="Company Name"
              />
            </div>

          </div>


          <div className="field-grid three-columns">

            <div className="field-group">
              <label>Location</label>

              <input
                {...register(`experience.${index}.location`)}
                placeholder="Remote / City"
              />
            </div>


            <div className="field-group">
              <label>Start Date</label>

              <input
                {...register(`experience.${index}.startDate`)}
                placeholder="Jun 2025"
              />
            </div>


            <div className="field-group">
              <label>End Date</label>

              <input
                {...register(`experience.${index}.endDate`)}
                placeholder="Aug 2025"
              />
            </div>

          </div>


          <div className="field-group">

            <div className="label-row">
              <label>Description</label>

              <span>Use measurable results</span>
            </div>

            <textarea
              {...register(`experience.${index}.description`)}
              rows="5"
              placeholder="Describe your responsibilities, contributions and measurable results..."
            />

          </div>

        </div>

      ))}


      <button
        type="button"
        className="add-entry-btn"
        onClick={() =>
          append({
            jobTitle: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            description: ""
          })
        }
      >
        <span>+</span>
        Add Experience
      </button>


      {fields.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">+</div>

          <h3>No experience added yet</h3>

          <p>
            Add internships, jobs, freelance work or relevant experience.
          </p>
        </div>
      )}

    </div>
  );
};

export default Experience;