import styles from "./events.module.css";

export default function Events() {
  const eventsItems = [
    {
      img: "../../public/events-imgs/baile-ABC.jpeg",
      title: "Baile Irmãos de Samba 21",
      subtitle: "ABC",
      date: "04 de outubro de 2025",
      time: "16h às 21h",
      local: "Coringa Madá",
      address: "Rua Luís Murat, 370 - Pinheiros - SP",
      payment: "",
      link: "",
      instagram: ["1", "2"],
      _id: "0001"
    },
    {
      img: "../../public/events-imgs/baile_Pinheiros.jpeg",
      title: "Baile Irmãos de Samba 3",
      subtitle: "Festa de aniversário",
      date: "04 de outubro de 2025",
      time: "16h às 21h",
      local: "Coringa Madá",
      address: "Rua Luís Murat, 370 - Pinheiros - SP",
      _id: "0002",
      description: `🚨3 anos de IRMÃOS DE SAMBA🚨

      Chegou a festa mais esperada e especial pelos Irmãos de Samba! 

      🎉 Festa Irmãos de Samba - Aniversário de 3 anos da CIA 🎉 
      É com grande alegria que convidamos você para a primeira comemoração de aniversário da CIA, sendo a de 3 anos de existência!! 
      
      No comando da pista teremos 2 DJS que vocês já conhecem e amam, o residente @djrobson_belo e o nosso dj convidado mega especial @jderivaldo_alves!
      
      Teremos o Show com a maravilhosa @natalianageoficial e banda, esquentando nossa pista e nos fazendo dançar ao som desta voz super potente! Teremos apresentações especiais! 
      
      Detalhes do evento: 
      📅 Data: 04 de outubro de 2025 
      🕓 Horário de Baile: 16h às 21h 
      🏢 Local: Coringa Madá 📍 
      Endereço: Luís Murat, 370 - Pinheiros - SP 
      
      Ingressos SOMENTE pelo SYMPLA 
      LINK NA BIO!!!! 
      
      2•lote R$ 40,00* até 28/09 
      3•lote R$ 50,00* até 03/10 
      Fique ligado e não perca a chance de garantir o seu. Então corre!!! 

      Não perca essa festa linda!! 
      Esperamos você lá! 😉 
      
      *sujeito a cobrança de taxa da plataforma! 
      
      Beijos e abraços carinhosos 
      Equipe IRMÃOS DE SAMBA`,
      payment: "",
      link: "",
      instagram: ["1", "2"],
    },
    {
      _id: "0003",
      img: "../../public/events-imgs/baile-sorocaba.jpeg",
      title: "Baile Irmãos de Samba",
      subtitle: "Sorocaba",
      date: "04 de outubro de 2025",
      time: "16h às 21h",
      local: "Coringa Madá",
      address: "Rua Luís Murat, 370 - Pinheiros - SP",
      payment: "",
      link: "",
      instagram: ["1", "2"],
    },
    {
      _id: "0004",
      img: "../../public/events-imgs/baile-sorocaba.jpeg",
      title: "Baile Irmãos de Samba 2",
      subtitle: "Sorocaba",
      date: "04 de outubro de 2025",
      time: "16h às 21h",
      local: "Coringa Madá",
      address: "Rua Luís Murat, 370 - Pinheiros - SP",
      payment: "",
      link: "",
      instagram: ["1", "2"],
    },
    {
      _id: "0005",
      img: "../../public/events-imgs/baile-sorocaba.jpeg",
      title: "Baile Irmãos de Samba 25",
      subtitle: "Sorocaba",
      date: "04 de outubro de 2025",
      time: "16h às 21h",
      local: "Coringa Madá",
      address: "Rua Luís Murat, 370 - Pinheiros - SP",
      payment: "",
      link: "",
      instagram: ["1", "2"],
    },
  ];

  return (
    <div className={styles.events}>
      <h1 className={`${styles.eventsTitle} title-section`}>Eventos</h1>
      <h2 className={`${styles.eventsSubTitle}`}>
        Clique na imagem para mais detalhes
      </h2>

      <div className={styles.eventsContentBox}>
        {eventsItems.map((items) => (
          <div className={styles.eventsContentCard} key={items._id}>
            <div>
              <img src={items.img} />
            </div>
            <div className={styles.eventsContentCardText}>
              <h1 className={styles.title}>{items.title}</h1>
              <h2 className={styles.subtitle}>{items.subtitle}</h2>
              <p>{items.date}</p>
              <p>{items.time}</p>
              <p>{items.address}</p>
              {/*
              <p className={styles.description}>{items.description}</p>
              */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
