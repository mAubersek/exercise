import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserCard = ({ user, isSelected, onClick }) => {
  return (
    <div
      className={`flex w-full pb-2 gap-1 cursor-pointer hover:text-orange-focus ${isSelected ? "text-orange" : "text-white"} items-center`}
      onClick={onClick}
    >
      <AccountCircleIcon style={{ fontSize: 20 }} />
      {user.firstName} {user.lastName}
    </div>
  );
};

export default UserCard;
