import "./App.css";
import { Home } from "./Pages/Home/Home";
import { TsParticle } from "./components/Particle/Tsparticle";

function App() {
  return (
    <div className="bg-slate-700">
      <TsParticle />
      <Home />
    </div>
  );
}

export default App;
