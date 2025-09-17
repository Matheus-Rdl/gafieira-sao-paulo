import VideoCarousel from "../../components/video-carousel/video-carousel";
import VideoRow from "../../components/video-row/video-row";
import styles from "./apresentation.module.css";

export default function Apresentation() {
  return (
    <div className={`${styles.apresentation}`}>
      <h1 className={`${styles.apresentationTitle} title-section`}>
        A vida precisa de movimento <br/>mexa-se!
      </h1>
      <div className={styles.apresentationCardContent}>
        <div className={styles.textApresentation}>
          <div>
            <p>
              Olá e bem-vinda(o) ao nosso cantinho dedicado ao Samba de
              Gafieira! Aqui, a gente acredita que a vida é muito mais gostosa
              quando está em movimento. E qual é o melhor jeito de se mexer se
              não dançando um bom samba?
            </p>
            <p>
              Quando dançamos, somos levados a prestar atenção em como nosso
              corpo se movimenta, em cada gesto e em cada respiração. Essa
              conexão nos permite conhecer melhor nossas limitações e
              potencialidades, revelando uma nova forma de ver e sentir a nós
              mesmos.
            </p>
          </div>
          <div>
            <p>
              Além disso, a dança é uma forma de despertar sua vitalidade,
              melhorar seu humor e liberar tensões. Ao se permitir dançar, você
              está cuidando do corpo e da mente, encontrando alegria e liberdade
              em cada movimento. O samba de gafieira é um convite para se mexer,
              sentir e viver com mais intensidade.
            </p>
            <p>
              Então, bora lá? A vida não espera, e o Samba de Gafieira está aqui
              para transformar o seu jeito de viver e movimentar. Venha sacudir
              a poeira e dar aquele gingado, porque a vida é muito curta para a
              gente ficar parada(o)!
            </p>
          </div>
        </div>
        <div className={styles.videoApresentation}>
          <VideoRow />
        </div>
      </div>
    </div>
  );
}
