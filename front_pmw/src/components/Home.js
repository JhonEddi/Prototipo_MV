import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from "./Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}