import { useFormContext } from "react-hook-form";

const Achievements = () => {
    const { register } = useFormContext();

    return (
        <div>
            <input
                {...register("achievementTitle")}
                placeholder="Achievement / Award"
            />

            <textarea
                {...register("achievementDescription")}
                placeholder="Describe your achievement"
            />

            <input
                {...register("achievementDate")}
                placeholder="Date / Year"
            />
        </div>
    );
};

export default Achievements;