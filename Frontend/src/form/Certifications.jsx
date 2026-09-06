import { useFormContext, useFieldArray } from "react-hook-form";

const Certifications = () => {

  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "certifications"
  });

  return (
    <div className="fields-container">

      {fields.map((field, index) => (

        <div className="dynamic-card" key={field.id}>

          <div className="dynamic-card-header">

            <div>
              <span className="entry-label">
                CERTIFICATION {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {field.name || "Certification"}
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

              <label>Certification Name</label>

              <input
                {...register(`certifications.${index}.name`)}
                placeholder="AWS Certified Cloud Practitioner"
              />

            </div>


            <div className="field-group">

              <label>Issuing Organization</label>

              <input
                {...register(`certifications.${index}.issuer`)}
                placeholder="Amazon Web Services"
              />

            </div>

          </div>


          <div className="field-grid two-columns">

            <div className="field-group">

              <label>Date / Year</label>

              <input
                {...register(`certifications.${index}.date`)}
                placeholder="2025"
              />

            </div>


            <div className="field-group">

              <label>Credential URL</label>

              <input
                {...register(`certifications.${index}.url`)}
                placeholder="credential URL"
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
            name: "",
            issuer: "",
            date: "",
            url: ""
          })
        }
      >
        <span>+</span>
        Add Certification
      </button>

    </div>
  );
};

export default Certifications;