import PageTitle from "../../components/PageTitle/PageTitle";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { FcReadingEbook } from 'react-icons/fc';
import css from './HomePage.module.css';

export default function HomePage() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    return(
        <main>
            <div className={css.backgroundImage}>
                {isLoggedIn ? (<>
                <PageTitle>Hi, {user.name}! <br />
                    Discover your phonebook.
                </PageTitle>
                </>) : (<>
                    <PageTitle> <FcReadingEbook className={css.icon}/> Phonebook </PageTitle>
                    <p className={css.text}>
                        The Phonebook is an online application designed 
                        for storing and managing user contacts. 
                        It allows users to register, log in, add, find, 
                        and delete contacts. Utilize this convenient tool to organize your 
                        contact list and simplify communication with friends, family, and colleagues.
                    </p>
                </>)
                }
        </div>
        </main>
    );
}