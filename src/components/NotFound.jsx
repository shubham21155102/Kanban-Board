import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Import the CSS file for styling

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="home-button">
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
