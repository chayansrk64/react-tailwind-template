import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      padding: '20px',
    }}>
      <h1 style={{
        fontSize: '4em',
        marginBottom: '20px',
        color: '#e44d26', // Example color
      }}>404 - Not Found</h1>
      <p style={{
        fontSize: '1.2em',
        color: '#666',
        marginBottom: '30px',
      }}>
        Oops! It looks like you're lost. The page you are looking for might not exist.
      </p>
      <Link to="/" style={{
        padding: '10px 20px',
        fontSize: '1em',
        backgroundColor: '#3498db', // Example color
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
      }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;