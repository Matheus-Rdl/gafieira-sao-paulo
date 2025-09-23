import styles from "./about.module.css";

export default function About() {
  return (
    <div className={`${styles.about}`}>
      <div className={styles.aboutContainer}>
        <svg
          className={styles.aboutSvgLarge}
          viewBox="0 0 1440 510"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 1440 0 L 1440 124 C 1345 149 1383 225 1229 269 C 1089 314 1114 380 825 451 C 645 488 457 536 290 469 C 158 427 39 439 0 471 L 0 380 C 57 398 108 280 238 336 C 376 433 629 421 808 324 C 967 197 1182 301 1235 203 C 1314 38 1376 90 1440 0 Z
            "
            fill="#1eb483"
          />
        </svg>
        <svg
          className={styles.aboutSvgSmall}
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 1440 0 L 1440 124 C 1345 149 1383 225 1229 269 C 1089 314 1114 380 825 451 C 645 488 457 536 290 469 C 158 427 39 439 0 471 L 0 380 C 57 398 104 354 225 381 C 376 433 629 421 808 324 C 967 197 1182 301 1235 203 C 1314 38 1376 90 1440 0 Z
            "
            fill="#1eb483"
          />
        </svg>
      </div>
      <h1 className={`${styles.aboutTitle} title-section`}>Quem somos nós</h1>

      <div className={styles.aboutTeachers}>
        <div className={styles.aboutPety}>
          <div>
            <h3>
              Pety <br /> (Thiago Peterson)
            </h3>
            <div className={styles.aboutPetyText}>
              <p>
                A cultura do samba esteve sempre presente nas raízes do Thiago.
                Ele vive o samba de gafieira desde 2011. Desde então, participou
                da Cia Veronezi, Cia Boombox e Cia Vanessa Jardim. Também
                ministrou aulas nos principais congressos de samba de gafieira.
              </p>
              <img src="../../public/man-exemplo-2.png" alt="" />
            </div>
          </div>
          {/*<img src="assets/man-example.png" alt="" />*/}
        </div>
        <div class={styles.aboutImgCouple}>
          <img src="../../public/casal-exemplo.png" alt="" />
        </div>
        <div className={styles.aboutVan}>
          <div>
            <h3>
              Vanesinha <br /> (Vanessa Macedo)
            </h3>
            <div className={styles.aboutVanText}>
              <img src="../../public/woman-exemplo-2.png" alt="" />
              <p>
                A Vanessa, além de formada em Biologia, é formada em Dança pelo
                curso técnico da ETEC de Artes (SP). É apaixonada por dança,
                pelo samba de gafieira e pelo zouk, e está nesse caminho desde
                2014. Já fez parte da Cia Vanessa Jardim, Cia Okan e Cia Akros,
                e foi campeã da Copa Samba, categoria semiprofissional, em 2019
                (SP).
              </p>
            </div>
          </div>
          {/*<img src="assets/woman-example.png" alt="" />*/}
        </div>
      </div>

      <div className={styles.aboutText}>
        <p>
          Esses dois artistas fazem um grande trabalho em São Paulo com seus
          Grupos de Estudos regulares, eventos, projetos e ações em prol do
          samba. Eles estão em constante estudo e buscando disseminar essa
          cultura através da dança pelo mundo. Ambos participaram e participam
          de projetos com a missão de fomentar o samba, como o Projeto SambaSP e
          a Cia Irmãos de Samba. Juntos fizeram uma turnê pelos principais
          países difusores do Samba de Gafieira da Europa e também Japão.
        </p>
      </div>

      <div className={styles.aboutCardContent}></div>
    </div>
  );
}
