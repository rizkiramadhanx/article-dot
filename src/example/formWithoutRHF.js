import { useState } from "react";

const FormWithoutRHF = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>firstName :</label>
        <input name="firstName" onChange={handleChange} />
        <label>lastName :</label>
        <input name="lastName" onChange={handleChange} />
        <button className="submitbtn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default FormWithoutRHF;
