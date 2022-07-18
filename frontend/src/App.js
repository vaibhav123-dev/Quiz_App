import "./App.css";
import { Home } from "./components/Home/Home";
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
