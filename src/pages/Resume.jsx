import Skills from "../components/UI/Skills";
import { Link } from 'react-router-dom';
import resumePDF from '../assets/P.Gonzalez-TeachingResumePedroMG3-2023.pdf'

export default function ResumePage(){
    return (
        <div>
            <main>
                <h3>My Skills:</h3>
                <Skills />
                <br />
                <Link to={resumePDF} target="_blank" download>Download Resume</Link>
            </main>
        </div>
    )
}