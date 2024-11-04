import { useEffect, useState } from "react";
import axios from "axios";
import SuccessNotification from "./Notification";

const UserDetail = ({ user, setUser }) => {
  let id, firstName, lastName, age, gender, email, phone;
  if (user) ({ id, firstName, lastName, age, gender, email, phone } = user);

  const apiUrl = process.env.REACT_APP_API_URL;

  const [enabledEdit, setEnabledEdit] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setEnabledEdit(false);
  }, [user]);

  const updateUser = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedData = Object.fromEntries(formData.entries());
    await axios
      .put(`${apiUrl}/users/${id}`, updatedData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((r) => {
        setUser(r.data);
        setEnabledEdit(false);
        setShowNotification(true);
      })
      .catch((err) => console.error(err));
  };

  const LineDetail = ({ title, content }) => {
    return (
      <div className="flex pb-2">
        <div className="w-1/3 font-semibold">{title}:</div>
        <div className="w-2/3 ">{content}</div>
      </div>
    );
  };

  if (user) {
    return (
      <div className="p-4 border-2 rounded-2xl max-h-fit max-w-xl ml-64">
        <div>
          <div className={"text-2xl font-bold mb-4"}>
            {firstName} {lastName}
          </div>
          {enabledEdit ? (
            <>
              <form onSubmit={updateUser} className={""}>
                <div className="flex  mb-2">
                  <label htmlFor="fname">First name:</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstName"
                    defaultValue={firstName}
                  />
                </div>

                <div className="flex  mb-2">
                  <label htmlFor="lname">Last name:</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastName"
                    defaultValue={lastName}
                  />
                </div>

                <div className="flex mb-2">
                  <label htmlFor="age">Age:</label>
                  <input type="text" id="age" name="age" defaultValue={age} />
                  <br />
                </div>

                <div className="flex mb-2">
                  <label htmlFor="gender">Gender:</label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    defaultValue={gender}
                  />
                </div>

                <div className="flex mb-2">
                  <label htmlFor="gender">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    defaultValue={email}
                  />
                </div>
                <div className="flex  mb-2">
                  <label htmlFor="gender">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    defaultValue={phone}
                  />
                </div>

                <div className={"flex justify-between mt-6"}>
                  <button
                    className={"btn-secondary"}
                    onClick={() => setEnabledEdit(false)}
                  >
                    {"Cancel edit"}
                  </button>
                  <button className={"btn-primary"} type={"submit"}>
                    Submit
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <LineDetail title={"ID"} content={id} />
              <LineDetail title={"First name"} content={firstName} />
              <LineDetail title={"Last name"} content={lastName} />
              <LineDetail title={"Age"} content={age} />
              <LineDetail title={"Gender"} content={gender} />
              <LineDetail title={"Email"} content={email} />
              <LineDetail title={"Phone"} content={phone} />
              <button
                className={"btn-primary mt-4"}
                onClick={() => setEnabledEdit(true)}
              >
                {"Edit user"}
              </button>
            </>
          )}
        </div>
        {showNotification && (
          <SuccessNotification
            message="User updated successfully!"
            onClose={() => setShowNotification(false)}
          />
        )}
      </div>
    );
  }
  return <div className="ml-64">Select an user from the list</div>;
};

export default UserDetail;
