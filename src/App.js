import Header from "./Components/Header/Header";
import './main.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Batiment from "./Pages/Batiment/Batiment";
import Services from "./Pages/Services";
import Fabrication from "./Pages/Fabrication";
import Alimentation from "./Pages/Alimentation";
import Accueil from "./Pages/Accueil/Accueil";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/" index element={<Accueil />} />
                    <Route path="/batiment" element={<Batiment />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/fabrication" element={<Fabrication />} />
                    <Route path="/alimentation" element={<Alimentation />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
