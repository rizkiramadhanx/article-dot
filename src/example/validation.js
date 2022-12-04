import { useForm } from "react-hook-form";

const Validation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="App">
        <label>firstName :</label>
        <div>
          <input
            {...register("firstName", {
              required: "firstName tidak boleh kosong",
              minLength: { value: 4, message: "minimal 4 huruf" }
            })}
            className={errors.firstName ? "borderRed" : undefined}
          />
          {errors.firstName && <p>*) {errors.firstName?.message}</p>}
        </div>
        <label>age :</label>
        <input
          {...register("age", {
            required: "age tidak boleh kosong",
            min: { value: 15, message: "minimal 15 tahun" }
          })}
          type="number"
          className={errors.age ? "borderRed" : undefined}
        />
        {errors.age && <p>*) {errors.age?.message}</p>}
        <button
          type="submit"
          className="submitbtn"
          disabled={!isValid}
          style={isValid ? null : { backgroundColor: "gray", color: "black" }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Validation;
