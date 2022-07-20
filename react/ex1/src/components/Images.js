import styles from './Images.module.css'
import ImageItem from './ImageItem'
import skye from '../img/skye.png'
import may from '../img/may.png'
import coulson from '../img/coulson.png'

const Images = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className={styles.container}>
        <ImageItem source={skye} imageTitle="Skye" />
        <ImageItem source={may} imageTitle="Melinda May" />
        <ImageItem source={coulson} imageTitle="Coulson" />
      </div>
    </div>
  );
}

export default Images