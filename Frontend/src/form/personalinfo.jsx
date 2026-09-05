import { useFormContext } from "react-hook-form";

const PersonalInfo = () => {
    const { register } = useFormContext();

    return (
        <div>
            <input
                {...register("name")}
                placeholder="Full Name"
            />

            <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
            />

            <input
                {...register("phone")}
                placeholder="Phone Number"
            />

            <input
                {...register("location")}
                placeholder="City, State"
            />

            <input
                {...register("linkedin")}
                placeholder="LinkedIn URL"
            />

            <input
                {...register("github")}
                placeholder="GitHub URL"
            />

            <input
                {...register("portfolio")}
                placeholder="Portfolio / Website URL"
            />

            <textarea
                {...register("summary")}
                placeholder="Professional Summary"
            />
        </div>
    );
};

export default PersonalInfo;