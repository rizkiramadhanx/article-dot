import { useForm } from "react-hook-form";

const UseFormExample = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>firstName :</label>
      <input {...register("firstName")} />
      <label>lastName :</label>
      <input {...register("lastName")} />
      <button type="submit" className="submitbtn">
        submit
      </button>
    </form>
  );
};

export default UseFormExample;
