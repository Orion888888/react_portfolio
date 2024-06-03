import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    const currentPage = useLocation().pathname;
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-teriary top-navbar">
            <div className="container-fluid">
                <div className='d-flex flex-wrap align-content-stretch'>
                <div className='p-2'>
                <h1>Pedro M. Gonzalez</h1>
                </div>
                <div className='p-2'>
                <Navbar
                links={[
                    <Link key={1} className={ currentPage === '/'? "nav-link active":"nav-link"} to="/">
                        About Me
                    </Link>,
                    <Link key={2} className={ currentPage === '/contact'? "nav-link active":"nav-link"} to="/contact">
                        Contact
                    </Link>,
                    <Link key={3} className={ currentPage === '/portfolio'? "nav-link active":"nav-link"} to="/portfolio">
                        Portfolio
                    </Link>,
                    <Link key={4} className={ currentPage === '/resume'? "nav-link active":"nav-link"} to="/resume">
                        Resume
                    </Link>
                 ]}
             ></Navbar>
             </div>
             </div>
            </div>
        </nav>
        </>
    )
}