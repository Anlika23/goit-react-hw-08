import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { IoHomeOutline } from 'react-icons/io5';
import css from './Navigation.module.css';

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.containerNav}>
            <NavLink  to="/" className={css.menu}>
                <IoHomeOutline className={css.homeIcon}/> 
            </NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts" className={css.menu}>
                    Contacts
                </NavLink>
            )}
        </nav>
    );
}
