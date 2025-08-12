import styles from "./header.module.css";
import { PiWhatsappLogoDuotone, PiInstagramLogoDuotone } from "react-icons/pi";

export default function Header () {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.headerTitle}>Gafieira São Paulo</p>
        <p className={styles.headerSubtitle}>Pety & Vanesinha</p>
      </div>
      <div className={styles.headerIcons}>
        <p>Entre em contato</p>
        <div>
          <PiWhatsappLogoDuotone />
          <PiInstagramLogoDuotone />
        </div>
      </div>
    </header>
  );
};

