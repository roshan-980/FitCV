import { useFormContext } from "react-hook-form";

const PersonalInfo = () => {

  const { register } = useFormContext();

  return (
    <div className="fields-container">

      <div className="field-grid two-columns">

        <div className="field-group">
          <label>Full Name</label>

          <input
            {...register("personal.name")}
            placeholder="e.g. Roshan Gupta"
          />

          <span className="field-hint">
            Use the name you want recruiters to see.
          </span>
        </div>


        <div className="field-group">
          <label>Professional Title</label>

          <input
            {...register("personal.title")}
            placeholder="e.g. Software Engineer"
          />
        </div>

      </div>


      <div className="field-grid two-columns">

        <div className="field-group">
          <label>Email Address</label>

          <input
            {...register("personal.email")}
            type="email"
            placeholder="you@example.com"
          />
        </div>


        <div className="field-group">
          <label>Phone Number</label>

          <input
            {...register("personal.phone")}
            placeholder="+91 98765 43210"
          />
        </div>

      </div>


      <div className="field-group">
        <label>Location</label>

        <input
          {...register("personal.location")}
          placeholder="e.g. Kolkata, West Bengal"
        />
      </div>


      <div className="form-divider">
        <span>Professional Links</span>
      </div>


      <div className="field-grid two-columns">

        <div className="field-group">
          <label>LinkedIn</label>

          <input
            {...register("personal.linkedin")}
            placeholder="linkedin.com/in/username"
          />
        </div>


        <div className="field-group">
          <label>GitHub</label>

          <input
            {...register("personal.github")}
            placeholder="github.com/username"
          />
        </div>

      </div>


      <div className="field-group">
        <label>Portfolio / Website</label>

        <input
          {...register("personal.portfolio")}
          placeholder="yourportfolio.com"
        />
      </div>


      <div className="field-group">
        <div className="label-row">

          <label>Professional Summary</label>

          <span>Recommended</span>

        </div>

        <textarea
          {...register("personal.summary")}
          placeholder="Briefly describe your background, strengths and career goals..."
          rows="5"
        />

        <span className="field-hint">
          Keep it concise — 2 to 4 sentences is usually enough.
        </span>

      </div>

    </div>
  );
};

export default PersonalInfo;