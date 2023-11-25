import { useState, useCallback } from 'react';

export const useAuthForm = (initialValue, validation) => {
  const [form, setForm] = useState(initialValue);
  const validationObj = {};
  Object.keys(initialValue).forEach((keys) => (validationObj[keys] = false));
  const [areValid, setAreValid] = useState(validationObj);

  const handler = useCallback(
    (e) => {
      const { name, value } = e.target;
      if (!validation[name](value)) {
        console.log('valdation', name, validation[name](value));
        setAreValid({ ...areValid, [name]: false });
      } else {
        setAreValid({ ...areValid, [name]: true });
      }
      console.log(name, value);
      setForm({ ...form, [name]: value });
    },
    [areValid, form, validation]
  );

  return [form, handler, areValid];
};
