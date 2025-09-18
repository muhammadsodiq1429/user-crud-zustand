import { useState, type ChangeEvent } from "react";

export const useGetInput = <T>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormData((p) => ({ ...p, [name]: value }));
  };

  return { handleChange, formData, setFormData };
};
