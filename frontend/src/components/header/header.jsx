import styles from "./header.module.css";
import { PiWhatsappLogoDuotone, PiInstagramLogoDuotone } from "react-icons/pi";

export default function Header () {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.headerTitle}>Gafieira São Paulo</h1>
        <h2 className={styles.headerSubtitle}>Pety & Vanesinha</h2>
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

