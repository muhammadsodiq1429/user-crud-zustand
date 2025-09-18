import { memo } from "react";
import { useUser } from "../../lib";
import { useNavigate } from "react-router-dom";

export const Users = memo(() => {
  const { users, deleteUserById, setUpdatingUser } = useUser();
  const navigate = useNavigate();

  return users.length > 0 ? (
    <div className="grid grid-cols-4 gap-5 *:shadow users">
      {users.map((user) => {
        const { email, firstName, lastName, id } = user;
        return (
          <div key={id} className="p-4 border border-gray-100 text-nowrap">
            <div className="body">
              <p>
                <span className="font-medium">First name: </span>
                {firstName}
              </p>
              <p>
                <span className="font-medium">Last name: </span>
                {lastName}
              </p>
              <p className="overflow-x-auto">
                <span className="font-medium">Email: </span>
                {email}
              </p>
            </div>
            <div className="mt-5 flex gap-5 font-semibold">
              <button
                className="text-red-500"
                onClick={() => deleteUserById(id)}
              >
                Delete
              </button>
              <button
                className="text-blue-500"
                onClick={() => {
                  setUpdatingUser(user);
                  navigate("/user-form");
                }}
              >
                Update
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <h1 className="text-center self-center text-5xl text-gray-400 mt-10">
        Users not found
      </h1>
    </div>
  );
});
