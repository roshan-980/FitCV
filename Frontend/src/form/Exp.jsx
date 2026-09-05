import { useFormContext } from "react-hook-form";

const Exp = () => {
    const { register } = useFormContext();

    return (
        <div>
            <input
                {...register("jobTitle")}
                placeholder="Job Title / Position"
            />

            <input
                {...register("company")}
                placeholder="Company / Organization"
            />

            <input
                {...register("location")}
                placeholder="Location"
            />

            <input
                {...register("startDate")}
                placeholder="Start Date"
            />

            <input
                {...register("endDate")}
                placeholder="End Date"
            />

            <textarea
                {...register("description")}
                placeholder="Describe your role and responsibilities"
            />
        </div>
    );
};

export default Exp;