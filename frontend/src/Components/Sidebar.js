import UserCard from "./UserCard";
import UsersList from "./UsersList";

const Sidebar = () => {


    return (
        <div className="fixed top-0 left-0 h-full w-64 bg-dark-blue p-4">
            <UsersList/>
        </div>
    )
}

export default Sidebar;