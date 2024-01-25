import React from 'react';
import '../Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <img src="../FAU-Logo.png" alt="FAU Basketball Logo" className="logo" />
                <h1 className="title">FAU 2023-2024 MBB Remaining Schedule</h1>
            </div>
        </div>
    );
}

export default Header;