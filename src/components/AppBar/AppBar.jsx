import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import css from './AppBar.module.css';
import { Link } from "react-router-dom";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.logoContainer}>
        <Link to="/" className={css.logoText}>
           Phone<span>Book</span>
        </Link>
      </div>
      <div className={css.menuContainer}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}