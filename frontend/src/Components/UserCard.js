import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserCard = ({user}) => {
    console.log(user);
    return (
        <div className="w-full text-white">
            {user.firstName}
        </div>
    )
}

export default UserCard;