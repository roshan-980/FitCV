import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import './components.css';
function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext();

  const formdata = watch();
  
  

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className = "mainform" onSubmit={handleSubmit(onSubmit)}>
      <input{...register("name")} placeholder="Your name"/>
      <input{...register("email")} placeholder="Your email" />
      <input{...register("contact")} placeholder="Your Phone no" />
      <button type="submit">
        Save Resume
      </button>
    </form>
  );
}

export default Form;