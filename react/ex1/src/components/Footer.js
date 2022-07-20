import MenuItem from './MenuItem'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div>
          <MenuItem link="/home" name="Home" />
          <MenuItem link="/about" name="Contato" />
          <MenuItem link="/contact" name="Sobre" />
        </div>
        <address>1290 6th Ave - New York</address>
      </div>
    </div>
  );
}

export default Footer;