import Logo from './Logo'
import Menu from './Menu'
import logo from '../img/shield.png'
import styles from './Header.module.css'

const Header = (props) => {

  return(
    <div className={styles.background}>
      <div className={styles.header}>
        <Logo homeLink="./" image={logo} name="Agents of Shield" />
        <Menu />
      </div>
    </div>
  );
}

export default Header;