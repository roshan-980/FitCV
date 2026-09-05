import { useFormContext } from "react-hook-form";

const Projects = () => {
    const { register } = useFormContext();

    return (
        <div>
            <input
                {...register("projectName")}
                placeholder="Project Name"
            />

            <textarea
                {...register("projectDescription")}
                placeholder="Project Description"
            />

            <input
                {...register("technologies")}
                placeholder="Technologies / Tools Used"
            />

            <input
                {...register("github")}
                placeholder="GitHub URL"
            />

            <input
                {...register("liveDemo")}
                placeholder="Live Demo URL"
            />

            <textarea
                {...register("projectHighlights")}
                placeholder="Key Features / Contributions"
            />
        </div>
    );
};

export default Projects;