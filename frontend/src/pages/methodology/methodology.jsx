//import { useEffect, useRef, useState } from "react";
import styles from "./methodology.module.css";

export default function Methodology() {
  /*
  const textLeft = `Fundamentalmente, acreditamos em um modelo de ensino e aprendizagem centrado no aluno, onde ele é o protagonista do seu processo de aprendizado. Ou seja, em nossas aulas, o aluno é incentivado a pensar, criar e questionar. Nossa aula é sempre baseada em fornecer ferramentas para que o aluno possa desenvolver melhor sua própria dança, conectar-se com a essência do samba e alcançar novos níveis. Acreditamos em um corpo que dança e sente, e não apenas na execução de movimentos.`;
  const textRight = `Para iniciantes, buscamos incentivar a construção de uma estrutura corporal em que o corpo esteja preparado para dançar. No início, trabalhamos principalmente o "balanço", como elemento central na construção do Samba de Gafieira. Gradualmente, introduzimos os principais movimentos do repertório, sempre deixando clara a importância dos fundamentos para a execução do repertório (como o "balanço", torção, postura, conexão e amortecimento). À medida que os alunos melhoram sua consciência corporal e aprendem os principais movimentos da dança, adicionamos continuamente ferramentas mais complexas e combinações de movimentos mais elaboradas, para desafiá-los cada vez mais.`;
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const words = textLeft.split(" ");
    const newLines = [];
    let currentLine = "";

    const maxChars = Math.floor(window.innerWidth / 20); // ajusta p/ % da tela

    words.forEach((word) => {
      if ((currentLine + " " + word).length > maxChars) {
        newLines.push(currentLine.trim());
        currentLine = word;
      } else {
        currentLine += " " + word;
      }
    });

    if (currentLine) newLines.push(currentLine.trim());
    setLines(newLines);
  }, [textLeft]);
  return(
  /* 
    <div
      ref={containerRef}
      style={{
        fontFamily: "sans-serif",
        fontSize: "18px",
        lineHeight: "1.6em",
        maxWidth: "50%",
        textAlign: "center",
      }}
    >
      {lines.map((line, i) => (
        <div key={i} style={{ marginLeft: `${i * .5}%` }}>
          {line}
        </div>
      ))}
    </div>
  }
  */
  return (
    <div className={`${styles.methodology}`}>
      <h1 className={`${styles.methodologyTitle} title-section`}>
        Nossa metodologia
      </h1>
      <div className={styles.methodologyText}>
        <div className={styles.methodologyTextLeft}>
          <img src="../../public/black-screen.jpg" alt="" />
          <p>
            Fundamentalmente, acreditamos em um modelo de ensino e aprendizagem
            <strong>centrado no aluno</strong>, onde ele é o
            <strong>protagonista do seu processo de aprendizado.</strong> Ou
            seja, em nossas aulas, o aluno é incentivado a
            <u>pensar, criar e questionar</u>. Nossa aula é sempre baseada em
            fornecer <u>ferramentas</u> para que o aluno possa desenvolver
            melhor sua própria dança, conectar-se com a essência do samba e
            alcançar novos níveis. Acreditamos em um corpo que dança e sente, e
            não apenas na execução de movimentos.
          </p>
        </div>
        <div className={styles.methodologyTextRight}>
          <div className={styles.methodologyContainer}>
            <svg
              className={styles.methodologySvgLarge}
              viewBox="0 0 1000 900"
              preserveAspectRatio="none"
            ></svg>
          </div>
          <img src="../../public/black-screen.jpg" alt="" />
          <p>
            Para iniciantes, buscamos incentivar a<strong>construção</strong> de
            uma <strong>estrutura corporal</strong> em que o corpo esteja
            preparado para dançar. No início, trabalhamos principalmente o
            "balanço", como elemento central na construção do Samba de Gafieira.
            Gradualmente, introduzimos os principais movimentos do repertório,
            sempre deixando clara a importância dos
            <strong> fundamentos</strong> para a execução do repertório (como o
            "balanço", torção, postura, conexão e amortecimento). À medida que
            os alunos melhoram sua <strong>consciência corporal</strong> e
            aprendem os principais movimentos da dança, adicionamos
            continuamente ferramentas mais complexas e combinações de movimentos
            mais elaboradas, para <u>desafiá-los cada vez mais.</u>
          </p>
        </div>
      </div>
    </div>
  );
}
