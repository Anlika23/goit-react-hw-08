
import { useDispatch, useSelector } from 'react-redux';

import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import { MdPersonSearch } from "react-icons/md";
// import { CgSearch } from "react-icons/cg";



export default function SearchBox() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter); 

    const handleSearch = (searchValue) => {
        dispatch(changeFilter(searchValue));
    };

    return (
        <div className={css.containerSearch}>
            <p className={css.label}><MdPersonSearch className={css.iconSearch}/> Find contacts by name</p>
            <input className={css.searchInput}
                type="text"
                placeholder="Search..."
                value={filterValue} 
                onChange={(e) => handleSearch(e.target.value)}
            />
            {/* <span className={css.searchIcon}><CgSearch /></span> */}
        </div>
    );
}

