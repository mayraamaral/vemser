import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import styles from './Contact.module.css'

const About = () => {
  return(
    <div className={styles.container}>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default About;