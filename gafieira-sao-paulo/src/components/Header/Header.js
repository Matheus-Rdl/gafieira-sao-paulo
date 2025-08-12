import "./Header.css";
import { PiWhatsappLogoDuotone, PiInstagramLogoDuotone } from "react-icons/pi";

const Header = () => {
  return (
    <header className="header">
      <div>
        <p className="header-title">Gafieira São Paulo</p>
        <p className="header-subtitle">Pety & Vanesinha</p>
      </div>
      <div className="header-icons">
        <p>Entre em contato</p>
        <div>
          <PiWhatsappLogoDuotone />
          <PiInstagramLogoDuotone />
        </div>
      </div>
    </header>
  );
};

export default Header;
