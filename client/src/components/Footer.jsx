import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

export function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Gandalizdis, Corporation</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={logo} alt="Logo" />
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to='/' className="nav-link px-2 text-body-secondary">Pagrindinis</Link></li>
                    <li className="nav-item"><Link to='/faq' className="nav-link px-2 text-body-secondary">Klausimai</Link></li>
                    <li className="nav-item"><Link to='/tos' className="nav-link px-2 text-body-secondary">Paslaugos sąlygos</Link></li>
                </ul>
            </footer>
        </div>
    );
}