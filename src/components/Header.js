import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const location = useLocation();
    const currentPage = location.pathname;
    const isMyPage = currentPage === '/mypage';

    return (
        <div className={`Header-container ${isMyPage ? 'mypage-header' : ''}`}>
            <div className="Home">
                <Link to="/" className="Header-section">LIKELION</Link>
            </div>
            <div className="menu">
                <Link 
                    to="/new" 
                    className={`Header-section ${currentPage === '/new' ? 'active' : ''}`}
                >
                    New
                </Link>
                <Link 
                    to="/perfume" 
                    className={`Header-section ${currentPage === '/perfume' ? 'active' : ''}`}
                >
                    Perfume
                </Link>
                <Link 
                    to="/diffuser" 
                    className={`Header-section ${currentPage === '/diffuser' ? 'active' : ''}`}
                >
                    Diffuser
                </Link>
                <Link 
                    to="/mypage" 
                    className={`Header-section ${currentPage === '/mypage' ? 'active' : ''}`}
                >
                    Mypage
                </Link>
            </div>
        </div>
    );
}

export default Header;