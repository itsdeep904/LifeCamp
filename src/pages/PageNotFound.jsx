import React from 'react';

const PageNotFound = () => {
  return (
    <>   <div className="p-4 for_responsive" style={{ marginLeft: '12rem',backgroundColor: "var(--background-center-color)" }}> <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ fontSize: '6rem', color: '#ff6b6b' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#333' }}>Page Not Found</h2>
      <p style={{ color: '#666', fontSize: '1rem', textAlign: 'center' }}>
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <a href="/" style={{ marginTop: '20px', color: '#007bff', textDecoration: 'underline' }}>Go to Home</a>
    </div>
    </div>
    </>

  );
};

export default PageNotFound;
