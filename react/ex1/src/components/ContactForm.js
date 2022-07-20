import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Contato</h1>
        <div className={styles.form}>
          <label htmlFor="name">Nome</label>
          <input name="name" type="text" />
          <label htmlFor="email">E-mail</label>
          <input name="email" type="text" />
          <label htmlFor="motivo">Motivo do contato</label>
          <select name="motivos" id="">
            <option value="skye">Gosto mais da Skye</option>
            <option value="may">Gosto mais da May</option>
            <option value="coulson">Gosto mais do Coulson</option>
          </select>
          <label htmlFor="mensagem">Digite sua mensagem:</label>
          <textarea name="mensagem" id="" cols="30" rows="10" placeholder="Digite sua mensagem"></textarea>
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;