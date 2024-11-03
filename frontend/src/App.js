import Sidebar from "./Components/Sidebar";
import UserDetail from "./Components/UserDetail";
import {useEffect, useState} from "react";

function App() {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="container">
            <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            <UserDetail user={selectedUser}/>
        </div>

    );
}

export default App;
