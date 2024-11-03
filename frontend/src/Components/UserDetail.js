import { useState } from "react";
import axios from "axios";

const UserDetail = ({ user }) => {
  let id, firstName, lastName, age, gender, email, phone;
  if (user) {
    ({ id, firstName, lastName, age, gender, email, phone } = user);
  }
  const [enabledEdit, setEnabledEdit] = useState(false);

  const updateUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedData = Object.fromEntries(formData.entries());
    console.log(updatedData);
    axios
      .put(`https://dummyjson.com/users/${id}`, updatedData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((r) => console.log(r))
      .catch((err) => console.error(err));
  };

  console.log(user);

  const LineDetail = ({ title, content }) => {
    return (
      <div className="flex justify-between pb-2">
        <div className="w-1/4 font-semibold">{title}:</div>
        <div className="w-3/4 ">{content}</div>
      </div>
    );
  };

  return (
    <div className="fixed text-black left-64 p-4 w-full">
      {user && (
        <div>
          {enabledEdit ? (
            <>
              <form onSubmit={updateUser}>
                <label htmlFor="fname">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="firstName"
                  defaultValue={firstName}
                />
                <br />
                <label htmlFor="lname">Last name:</label>
                <input
                  type="text"
                  id="lname"
                  name="lastName"
                  defaultValue={lastName}
                />
                <br />
                <label htmlFor="age">Age:</label>
                <input type="text" id="age" name="age" defaultValue={age} />
                <br />
                <label htmlFor="gender">Gender:</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  defaultValue={gender}
                />
                <br />
                <label htmlFor="gender">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  defaultValue={email}
                />
                <br />
                <label htmlFor="gender">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  defaultValue={phone}
                />
                <br />
                <button type={"submit"}>Submit</button>
              </form>
            </>
          ) : (
            <>
              <div className={"text-2xl font-bold mb-3"}>
                {firstName} {lastName}
              </div>
              <LineDetail title={"ID"} content={id} />
              <LineDetail title={"First name"} content={firstName} />
              <LineDetail title={"Last name"} content={lastName} />
              <LineDetail title={"Age"} content={age} />
              <LineDetail title={"Gender"} content={gender} />
              <LineDetail title={"Email"} content={email} />
              <LineDetail title={"Phone"} content={phone} />
              <button onClick={() => setEnabledEdit(!enabledEdit)}>Edit</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDetail;
