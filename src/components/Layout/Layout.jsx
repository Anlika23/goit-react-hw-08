import AppBar from '../AppBar/AppBar';
// import Footer from "../Footer/Footer";
import css from './Layout.module.css';



export default function Layout({ children }) {
  return (
    <div className={css.container}>
        <AppBar />
        {children}
        {/* <Footer /> */}
    </div>
  );
}
