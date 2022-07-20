import styles from './ImageItem.module.css'

const ImageItem = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.source} alt="" />
      <p>{props.imageTitle}</p>
    </div>
  );
}

export default ImageItem