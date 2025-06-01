import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--color-strategic-dark)', /* Darkest background */
            color: 'var(--color-text-secondary)',
            textAlign: 'center',
            padding: 'var(--spacing-md)',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(255, 153, 51, 0.1)' /* Saffron accent border */
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Algo Nirman Hackathon. All rights reserved.</p>
                <p style={{ marginTop: 'var(--spacing-xs)' }}>Organized by Vectorix Community</p>
                {/* Social media icons can be added here */}
            </div>
        </footer>
    );
};

export default Footer;