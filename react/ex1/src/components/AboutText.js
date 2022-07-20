import styles from './AboutText.module.css'

const AboutText = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Sobre a série</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/T3T-evQZiQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <p><strong>Número de temporadas: </strong>7</p>
        <p><strong>Gênero: </strong>Drama e ficção</p>
        <p><strong>País de origem: </strong>EUA</p>
        <p><strong>Ano: </strong>2013-2017</p>
        <p>A série começa onde o filme campeão de bilheterias Os Vingadores (2012) acabou. Depois da batalha de Nova Iorque, quando a existência de super heróis e aliens já se tornou pública, o mundo está tentando se adaptar com a nova realidade. O agente Phil Coulson (Clark Gregg) retorna para a S.H.I.E.L.D e agora está de olho num grupo misterioso chamado de The Rising Tide. Com o objetivo de encontrar este grupo inimigo nunca antes visto, ele monta uma equipe de agentes secretos da S.H.I.E.L.D. (Strategic Homeland Intervention Enforcement and Logistics Division).</p>
        <p>Essa equipe é formada pelos agentes: Grant Ward (Brett Dalton), altamente treinado em combate e alta espionagem; Melinda May (Ming-Na Wen), piloto e artista das artes marciais; Leo Fitz (Iain De Caestecker), um engenheiro brilhante; e Jemma Simmons (Elizabeth Henstridge), uma genial bioquímica. Quem também se junta a esta grande jornada pelo mundo do mistério é a recruta e hacker Skye (Chloe Bennet).</p>
        <p>Créditos: <a href="https://cinema10.com.br/series/marvels-agents-of-shield">Cinema10</a></p>
      </div>
    </div>
  );
}

export default AboutText;