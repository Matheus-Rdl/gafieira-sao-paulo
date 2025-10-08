import Testimonials from "../testimonials/testimonials";
import styles from "./groups.module.css";

export default function Groups() {
  return (
    <div className={styles.groups}>
      <h1 className={`${styles.groupsTitle} title-section`}>
        Grupos de estudos
      </h1>
      <div className={styles.groupsContent}>
        <table className={styles.groupsTable}>
          <thead>
            <tr>
              <td
                className={` ${styles.groupsTableDays} ${styles.groupsTableBorderLeftTop}`}
              >
                Dias da semana
              </td>
              <td>Horário</td>
              <td className={styles.groupsTableBorderRightTop}>Nivel</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.groupsTableDays}>Segunda</td>
              <td>20h às 21h15</td>
              <td>Básico**</td>
            </tr>
            <tr>
              <td className={styles.groupsTableDays}>Segunda</td>
              <td>21h às 22h15</td>
              <td>Intermediário**</td>
            </tr>
            <tr>
              <td className={styles.groupsTableDays}>Terça</td>
              <td>19h30 às 22h45</td>
              <td>Samba funkeado*</td>
            </tr>
            <tr>
              <td className={styles.groupsTableDays}>Terça</td>
              <td>20h45 às 22h</td>
              <td>Intermediário*</td>
            </tr>
            <tr>
              <td className={styles.groupsTableDays}>Quarta</td>
              <td>19h30 às 20h30</td>
              <td>Iniciante*</td>
            </tr>
            <tr>
              <td className={styles.groupsTableDays}>Quarta</td>
              <td>21h às 22h15</td>
              <td>Intermediário**</td>
            </tr>
            <tr>
              <td
                className={`${styles.groupsTableDays} ${styles.groupsTableBorderLeftBottom}`}
              >
                Quinta
              </td>
              <td>20h30 às 22h</td>
              <td className={styles.groupsTableBorderRightBottom}>
                Avançado**
              </td>
            </tr>
            <tr>
              <td colspan="3" className={styles.groupsTableLastCollum}>
                *Rua Capri,12, Pinheiros | **Rua Simão Alvares, 714, Vl.
                Madalena<br></br>
                Mais informações e matricula (11) 94025-9285
              </td>
            </tr>
          </tbody>
        </table>
        {/*
        */}
        <div className={styles.groupsTestimonials}>
          <Testimonials/>
        </div>
      </div>
    </div>
  );
}
