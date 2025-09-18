import { memo, useState, type FormEvent } from "react";
import { useGetInput } from "../../hooks/use-get-input";
import { useUser } from "../../lib";
import type { InitialState } from "../../types";

const initialState: InitialState = {
  email: "",
  firstName: "",
  lastName: "",
};

export const UserFrom = memo(() => {
  const { addUser, updatingUser, updateUserById, setUpdatingUser } = useUser();

  const { formData, setFormData, handleChange } = useGetInput<InitialState>(
    updatingUser || initialState
  );

  const [toast, setToast] = useState<boolean>(false);
  const [isHiding, setIsHiding] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (updatingUser) {
      updateUserById(updatingUser.id, formData);
      setTimeout(() => {
        setUpdatingUser(null);
      }, 3501);
    } else {
      addUser({ id: Date.now(), ...formData });
    }

    setFormData(initialState);

    setToast(true);
    setTimeout(() => {
      setIsHiding(true);
    }, 3000);

    setTimeout(() => {
      setToast(false);
      setIsHiding(false);
    }, 3500);
  };

  return (
    <div className="w-90 mx-auto shadow p-5 mt-10 border border-gray-100">
      {toast && (
        <div className={`toast shadow-2xl ${isHiding ? "toast-hide" : ""}`}>
          <p className="text-white text-xl">
            User {updatingUser ? "updated" : "added"} successfully
          </p>
        </div>
      )}
      <h2 className="text-2xl shadow-none mb-5">User</h2>
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid *:py-2 *:px-3 *:shadow gap-5 *:  *:border-gray-100 "
      >
        <input
          type="text"
          value={formData.firstName}
          placeholder="First name"
          name="firstName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          value={formData.lastName}
          placeholder="Last name"
          name="lastName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          value={formData.email}
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
        />
        <button className="bg-black text-white">
          {updatingUser ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
});
