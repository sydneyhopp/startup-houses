import React from 'react';

export default function SlideContainer({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',  // Items arranged in a column
        alignItems: 'center',     // Center items horizontally
        justifyContent: 'center', // Center items vertically (if needed)
        width: '100%',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
}
