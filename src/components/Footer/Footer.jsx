import { Typography, Link } from "@mui/material";
import css from './Footer.module.css'

export default function Footer() {

  return (
    <div className={css.footerContainer}>
      <Typography variant="body2" color="inherit" align="center" sx={{ mt: 2, mb: 2 }}>
        {'© '}
        <Link color="inherit" href="#">
             Angelika Leshkovych
        </Link> {''}
        {new Date().getFullYear()}
            {'.'}
      </Typography>
    </div>
  );
}
