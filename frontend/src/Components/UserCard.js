import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserCard = ({user, isSelected, onClick}) => {
    //console.log(user);
    return (
        <div className={`flex w-full pb-2 gap-1 cursor-pointer ${isSelected ? 'text-blue-500' : 'text-white'}`}
             onClick={onClick}>
            <AccountCircleIcon/>
            <p>{user.firstName} {user.lastName}</p>
        </div>
    )
}

export default UserCard;