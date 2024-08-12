import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import {Header} from "./components/Header.jsx";
import {Hero} from "./components/Hero.jsx";
import {Benefits} from "./components/Benefits.jsx";
import {Collaboration} from "./components/Collaboration.jsx";
import {Services} from "./components/Services.jsx";
import Roadmap from "./components/Roadmap.jsx";

const App = () => {

    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Hero />
                <Benefits />
                <Collaboration />
                <Services />
                <Roadmap />
            </div>

            <ButtonGradient />
        </>
    )
}

export default App