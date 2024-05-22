import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "../UserMenu/UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import { MdLogout } from "react-icons/md";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.container}>
      <div className={css.textMenu}>
        <p className={css.text}>Welcome, {user.name} </p>
        <p className={css.text}>{user.email} </p>
      </div>
      <button onClick={handleLogout} className={css.btnLogOut} type="button">
        LogOut <MdLogout className={css.iconLogOut}/>
      </button>
    </div>
  );
}