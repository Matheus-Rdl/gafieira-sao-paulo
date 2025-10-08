import styles from "./testimonials.module.css";

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <h1 className={`${styles.testimonialsTitle} title-section`}>
        Depoimentos
      </h1>

      <div className={styles.testimonialsCard}>
        <div className={styles.testimonialsBox}>
          <div className={styles.testimonialsBoxContent1}>
            <h3>Luciano Hulk</h3>
            <div>
              <img src="../../public/black-man-example.png" alt="" />
              <p>
                São fantásticos como professores e pessoas, com eles todos
                conseguem aprender a dançar.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.testimonialsBox}>
          <div className={styles.testimonialsBoxContent2}>
            <h3>Helena Gimenez</h3>
            <div>
              <img src="../../public/white-woman-example.png" alt="" />
              <p>
                Maravilhosa experiência!! Aprendi muito com a Vanessa & Thiago
                Pety! Samba de gafieira é com os dois, que arrasam Não escapa
                nenhum detalhe da Van e Pety. Eles corrigem todos nossos erros,
                ajustam nossa postura e passos. Parabéns a essa dupla nota
                10!!!!!.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.testimonialsBox}>
          <div className={styles.testimonialsBoxContent3}>
            <h3>Fábio Teixeira</h3>
            <div>
              <img src="../../public/white-man-example.png" alt="" />
              <p>
                Estou adorando as aulas. Além de ótimos dançarinos eles tratam
                cada aluno com muito carinho e paciência, a didática é
                excelente.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.testimonialsBox}>
          <div className={styles.testimonialsBoxContent4}>
            <h3>Vanessa da Mata</h3>
            <div>
              <img src="../../public/black-woman-example.png" alt="" />
              <p>
                São profissionais incríveis. Trazem propostas diferentes a cada
                aula e estão sempre buscando a evolução dos alunos. Eu sempre
                saio satisfeita e inspirada das aulas. Obrigada!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
