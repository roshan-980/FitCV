import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

const Skills = () => {

  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills"
  });

  const [skill, setSkill] = useState("");

  const addSkill = () => {

    const trimmedSkill = skill.trim();

    if (!trimmedSkill) return;

    append({
      name: trimmedSkill
    });

    setSkill("");
  };

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="fields-container">

      <div className="skills-intro">

        <h3>What are you good at?</h3>

        <p>
          Add technical, professional or personal skills that
          are relevant to the role you're targeting.
        </p>

      </div>


      <div className="skill-input-wrapper">

        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter..."
        />

        <button
          type="button"
          onClick={addSkill}
        >
          + Add
        </button>

      </div>


      {fields.length > 0 && (

        <div className="skill-list">

          {fields.map((field, index) => (

            <div className="skill-tag" key={field.id}>

              <span>{field.name}</span>

              <button
                type="button"
                onClick={() => remove(index)}
              >
                ×
              </button>

            </div>

          ))}

        </div>

      )}


      {fields.length === 0 && (

        <div className="empty-state">

          <div className="empty-icon">+</div>

          <h3>Add your skills</h3>

          <p>
            Examples: React, Communication, Leadership, Java,
            Project Management, Public Speaking.
          </p>

        </div>

      )}

    </div>
  );
};

export default Skills;