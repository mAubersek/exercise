import Sidebar from "./Components/Sidebar";
import UserDetail from "./Components/UserDetail";
import { useState } from "react";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <div className={"p-4"}>
        <UserDetail user={selectedUser} setUser={setSelectedUser} />
      </div>
    </div>
  );
}

export default App;
