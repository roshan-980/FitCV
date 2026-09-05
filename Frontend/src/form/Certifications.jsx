import { useFormContext } from "react-hook-form";

const Certifications = () => {
    const { register } = useFormContext();

    return (
        <div>
            <input
                {...register("certificationName")}
                placeholder="Certification Name"
            />

            <input
                {...register("certificationOrganization")}
                placeholder="Issuing Organization"
            />

            <input
                {...register("certificationDate")}
                placeholder="Date / Year"
            />

            <input
                {...register("certificationUrl")}
                placeholder="Credential URL"
            />
        </div>
    );
};

export default Certifications;