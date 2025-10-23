import Apresentation1 from "../apresentation-1/apresentation-1";
import Apresentation2 from "../apresentation-2/apresentation-2";
import About1 from "../about-1/about-1";
import About2 from "../about-2/about-2";
import Methodology from "../methodology/methodology";
import Groups from "../groups/groups";
import Events from "../events/events";

export default function Home() {
  return (
    <div>
      {/*
      <Apresentation1/>
      */}
      {/*
       */}
      <Apresentation2 />
      {/*
      */}
      {/*
       <About1/>
       */}

      <Groups/>
      <About2 />

      <Methodology/>
      <Events/>
      {/*
      */}
      {/*<Groups/>*/}
    </div>
  );
}
