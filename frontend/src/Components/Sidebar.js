import UsersList from "./UsersList";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen bg-dark-blue p-4">
      <div className={"text-orange text-xl mb-4"}>List of users</div>
      <UsersList
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
};

export default Sidebar;
