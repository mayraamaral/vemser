import MenuItem from './MenuItem'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <MenuItem name="Home" link="/" />
      <MenuItem name="Sobre" link="/about" />
      <MenuItem name="Contato" link="/contact" />
    </div>
  );
}

export default Menu;