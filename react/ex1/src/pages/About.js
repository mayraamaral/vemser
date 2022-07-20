import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutText from '../components/AboutText';
import styles from './About.module.css'

const About = () => {
  return(
    <div className={styles.container}>
      <Header />
      <AboutText />
      <Footer />
    </div>
  );
}

export default About;