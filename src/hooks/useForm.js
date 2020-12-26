import { useState } from "react";

export const useForm = (state = {}) => {
  const [formValues, setFormValues] = useState(state);

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return [formValues, handleChange];
};
