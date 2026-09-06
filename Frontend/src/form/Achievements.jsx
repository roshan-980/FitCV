import { useFormContext, useFieldArray } from "react-hook-form";

const Achievements = () => {

  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "achievements"
  });

  return (
    <div className="fields-container">

      {fields.map((field, index) => (

        <div className="dynamic-card" key={field.id}>

          <div className="dynamic-card-header">

            <div>
              <span className="entry-label">
                ACHIEVEMENT {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {field.title || "Achievement"}
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

              <label>Achievement / Award</label>

              <input
                {...register(`achievements.${index}.title`)}
                placeholder="Hackathon Winner"
              />

            </div>


            <div className="field-group">

              <label>Date / Year</label>

              <input
                {...register(`achievements.${index}.date`)}
                placeholder="2025"
              />

            </div>

          </div>


          <div className="field-group">

            <label>Description</label>

            <textarea
              {...register(`achievements.${index}.description`)}
              rows="4"
              placeholder="Describe what you achieved..."
            />

          </div>

        </div>

      ))}


      <button
        type="button"
        className="add-entry-btn"
        onClick={() =>
          append({
            title: "",
            date: "",
            description: ""
          })
        }
      >
        <span>+</span>
        Add Achievement
      </button>

    </div>
  );
};

export default Achievements;