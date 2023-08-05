import Header from "./Components/Header/Header";
import './main.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Batiment from "./Pages/Batiment/Batiment";
import Services from "./Pages/Services/Services";
import Fabrication from "./Pages/Fabrication/Fabrication";
import Alimentation from "./Pages/Alimentation/Alimentation";
import Accueil from "./Pages/Accueil/Accueil";
import Error404 from "./Pages/404/Error404";
import EntrepriseDetailPage from "./Pages/EntrepriseDetailPage/EntrepriseDetailPage";
import Mentions from "./Pages/Mentions_Legales/Mentions";
import Donnee from "./Pages/Donnees_personnelles/Donnee";
import Accessibilite from "./Pages/Accessibilite/Accessibilite";
import Cookies from "./Pages/Cookies/Cookies";


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
                    <Route path="/mentions-legales" element={<Mentions />}/>
                    <Route path="/donnees-personnelles" element={<Donnee />}/>
                    <Route path="/accessibilite" element={<Accessibilite />}/>
                    <Route path="/cookies" element={<Cookies />}/>
                    <Route path="/entreprise/:name" element={<EntrepriseDetailPage />} />
                    <Route path="/*" element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
