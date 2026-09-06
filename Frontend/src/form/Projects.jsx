import { useFormContext, useFieldArray } from "react-hook-form";

const Projects = () => {

  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects"
  });

  return (
    <div className="fields-container">

      {fields.map((field, index) => (

        <div className="dynamic-card" key={field.id}>

          <div className="dynamic-card-header">

            <div>
              <span className="entry-label">
                PROJECT {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {field.name || "Project"}
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


          <div className="field-group">

            <label>Project Name</label>

            <input
              {...register(`projects.${index}.name`)}
              placeholder="e.g. AI Interview Platform"
            />

          </div>


          <div className="field-group">

            <label>Description</label>

            <textarea
              {...register(`projects.${index}.description`)}
              rows="4"
              placeholder="What does the project do and what problem does it solve?"
            />

          </div>


          <div className="field-group">

            <label>Technologies / Tools</label>

            <input
              {...register(`projects.${index}.technologies`)}
              placeholder="React, Node.js, MongoDB, OpenAI API"
            />

          </div>


          <div className="field-grid two-columns">

            <div className="field-group">

              <label>GitHub URL</label>

              <input
                {...register(`projects.${index}.github`)}
                placeholder="github.com/username/project"
              />

            </div>


            <div className="field-group">

              <label>Live Demo</label>

              <input
                {...register(`projects.${index}.liveDemo`)}
                placeholder="project.vercel.app"
              />

            </div>

          </div>


          <div className="field-group">

            <label>Key Contributions</label>

            <textarea
              {...register(`projects.${index}.highlights`)}
              rows="4"
              placeholder="Mention important features, technical decisions or measurable results..."
            />

          </div>

        </div>

      ))}


      <button
        type="button"
        className="add-entry-btn"
        onClick={() =>
          append({
            name: "",
            description: "",
            technologies: "",
            github: "",
            liveDemo: "",
            highlights: ""
          })
        }
      >
        <span>+</span>
        Add Project
      </button>


      {fields.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">+</div>

          <h3>Showcase your work</h3>

          <p>
            Add projects that demonstrate your skills and experience.
          </p>
        </div>
      )}

    </div>
  );
};

export default Projects;