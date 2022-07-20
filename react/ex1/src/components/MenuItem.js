import styles from './MenuItem.module.css'

const MenuItem = (props) => {
  return (
    <a className={styles.menuLink} href={props.link}>{props.name}</a>
  );
}

export default MenuItem;