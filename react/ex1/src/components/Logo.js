import styles from './Logo.module.css'

const Logo = (props) => {
  return(
    <div className={styles.logo}>
      <div className={styles.logoContainer}>
        <a href={props.homeLink}><img src={props.image} className={styles.logoImg} alt="" /></a>
      </div>
      <small className={styles.name}>{props.name}</small>
    </div>
  );
}

export default Logo;