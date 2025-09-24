import styles from "./header.module.css";
import { PiWhatsappLogoDuotone, PiInstagramLogoDuotone } from "react-icons/pi";

export default function Header () {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.headerTitle}>Pety & Vanesinha</h1>
        <h2 className={styles.headerSubtitle}>Gafieira SÃo Paulo</h2>
      </div>
      <div className={styles.headerIcons}>
        <h3>Entre em contato</h3>
        <div>
          <PiWhatsappLogoDuotone />
          <PiInstagramLogoDuotone />
        </div>
      </div>
    </header>
  );
};

