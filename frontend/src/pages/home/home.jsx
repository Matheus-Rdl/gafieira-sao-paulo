import Apresentation from "../apresentation/apresentation";
import About from "../about/about";
import Methodology from "../methodology/methodology";
import Groups from "../groups/groups";

export default function Home() {
  return (
    <div>
      <Apresentation/>
      <About/>
      <Methodology/>
      <Groups/>
    </div>
  );
}
