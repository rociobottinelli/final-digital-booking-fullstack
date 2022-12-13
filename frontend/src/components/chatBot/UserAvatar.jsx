import React, { useContext } from "react";
import userAvatar from "../../assets/images/user-avatar.JPG";
import IsLoggedContext from "../../context/isLogedContext";
import "../../styles/chatBot/monkeyBotAvatar.css";

const userName = localStorage.getItem("userName");
const userLastname = localStorage.getItem("userLastname");

const UserAvatar = () => {
  const { isLoged } = useContext(IsLoggedContext);

  return (
    <>
      {isLoged ? (
        <li className="avatar userAvatar">
          {`${userName.charAt(0).toUpperCase()}${userLastname.charAt(0).toUpperCase()}`}
        </li>
      ) : (
        <img className="userAvatar" src={userAvatar} alt="Avatar usuario" />
      )}
    </>
  );
};

export default UserAvatar;
