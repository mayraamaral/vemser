import Images from './Images'
import styles from './Main.module.css'

const Main = () => {
  return (
    <div>
      <div className={styles.container}>
        <Images title="Os melhores personagens da série" />
      </div>
      <div className={styles.background}>
        <div className={styles.text}>
          <p>Agents of Shield é uma série de televisão americana criada por Joss Whedon em colaboração com Jed Whedon e Maurissa Tancharoen, é baseada na S.H.I.E.L.D. (Superintendência Humana de Intervenção, Espionagem, Logística e Dissuasão, sigla em português), uma organização fictícia que atua pela manutenção da paz e espionagem em um mundo de super-heróis criada pela Marvel Comics. Ela está situada no Universo Cinematográfico Marvel (MCU), compartilhando a continuidade com os filmes e as demais séries de televisão da franquia.</p>
          <p>A série gira em torno do personagem Phil Coulson, com Clark Gregg reprisando seu papel da série de filmes, e sua equipe de agentes da S.H.I.E.L.D., que precisam lidar com vários casos e inimigos incomuns, incluindo outras organizações como a Hidra e os Inumanos. Joss Whedon começou a desenvolver o episódio piloto para uma série da S.H.I.E.L.D. logo após o sucesso de seu filme Marvel's The Avengers e, em outubro de 2012, Gregg foi o primeiro confirmado no elenco para reprisar seu papel.</p>
          <p>Créditos: <a href="https://pt.wikipedia.org/wiki/Agentes_da_S.H.I.E.L.D.">Wikipedia</a> </p>
        </div>
      </div>
      <div className={styles.iframe}>
        <h1>Endereço da Marvel Entertainment</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.070539409256!2d-73.98107354984998!3d40.76047324248561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25900f1b107d3%3A0xab4c80b6e25831dd!2sMarvel%20Entertainment!5e0!3m2!1spt-BR!2sbr!4v1655989145718!5m2!1spt-BR!2sbr"></iframe>
      </div>
    </div>
  );
}

export default Main