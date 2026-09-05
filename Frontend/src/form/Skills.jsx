import { useFormContext } from "react-hook-form";

const Skills = () => {
    const { register } = useFormContext();

    return (
        <div>
            <input
                {...register("skills")}
                placeholder="Skills (e.g. C++, React, Communication, Leadership)"
            />
        </div>
    );
};

export default Skills;