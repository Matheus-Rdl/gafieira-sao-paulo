import Apresentation from "../apresentation/apresentation";
import About from "../about/about";
import Methodology from "../methodology/methodology";
import Groups from "../groups/groups";
import Events from "../events/events";

export default function Home() {
  return (
    <div>
      <Apresentation/>
      <About/>
      <Methodology/>
      <Events/>
      {/*<Groups/>*/}
    </div>
  );
}
