import { useFormContext } from "react-hook-form";

const Education = () => {
    const { register } = useFormContext();

    return (
        <div>
            <input
                {...register("degree")}
                placeholder="Degree / Qualification"
            />

            <input
                {...register("institution")}
                placeholder="School / College / University"
            />

            <input
                {...register("location")}
                placeholder="Location"
            />

            <input
                {...register("startDate")}
                placeholder="Start Year"
            />

            <input
                {...register("endDate")}
                placeholder="End Year"
            />

            <input
                {...register("grade")}
                placeholder="CGPA / Percentage / Grade"
            />

            <textarea
                {...register("coursework")}
                placeholder="Relevant Coursework"
            />
        </div>
    );
};

export default Education;