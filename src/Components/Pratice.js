import { useState } from "react";

export const Practice = () => {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="name" onChange={handleChange} />
        <input name="email" onChange={handleChange} />
        <input name="password" onChange={handleChange} />
        <input type="checkbox" name="subscribe" onChange={handleChange} />
        <button type="submit">Submi form</button>
      </form>
    </div>
  );
};
