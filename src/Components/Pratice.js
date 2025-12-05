import { useState } from "react";

export const Practice = () => {
  const [rating, setRating] = useState(5);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
  });
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((pre) => ({
      ...pre,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!", form);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();

    alert("Form submitted!");
    setRating(5);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="name" onChange={handleChange} />
        <input name="email" onChange={handleChange} />
        <input name="password" onChange={handleChange} />
        <input type="checkbox" name="subscribe" onChange={handleChange} />
        <button type="submit">Submi form</button>
      </form>
      <br></br>
      <br></br>
      <br></br>

      <form onSubmit={handleSubmitForm}>
        <lable>Rating: {rating}</lable>
        <br></br>
        <br></br>
        <input
          type="range"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
