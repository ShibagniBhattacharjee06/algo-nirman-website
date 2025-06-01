import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Tracks', href: '#tracks' },
        { name: 'Guests', href: '#guests' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(10, 25, 47, 0.95)', /* Dark blue, slightly transparent */
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            padding: 'var(--spacing-sm) var(--spacing-md)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backdropFilter: 'blur(5px)', /* Modern glassy effect */
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}>
                <a href="#home" style={{
                    color: 'var(--color-accent)', /* Use the accent color for branding */
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    textDecoration: 'none',
                    fontWeight: 700,
                    textShadow: '0 0 5px rgba(255, 193, 7, 0.3)',
                }}>
                    Algo Nirman
                </a>

                {/* Desktop Navigation */}
                <ul style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: 'var(--spacing-md)',
                }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} style={{
                                color: 'var(--color-text-primary)',
                                textDecoration: 'none',
                                fontFamily: 'var(--font-subheading)',
                                fontSize: '1.1rem',
                                padding: '0.5rem 0',
                                position: 'relative',
                                transition: 'color var(--transition-fast)',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-primary)'}
                            >
                                {link.name}
                                {/* Underline effect */}
                                <span style={{
                                    content: '""',
                                    position: 'absolute',
                                    width: '0%',
                                    height: '2px',
                                    bottom: '0',
                                    left: '0',
                                    backgroundColor: 'var(--color-accent)',
                                    transition: 'width var(--transition-fast)',
                                }}
                                onMouseEnter={(e) => e.target.style.width = '100%'}
                                onMouseLeave={(e) => e.target.style.width = '0%'}
                                ></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Menu */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none', // Hidden on desktop
                        background: 'none',
                        border: 'none',
                        fontSize: '2rem',
                        color: 'var(--color-text-primary)',
                        cursor: 'pointer',
                        zIndex: 1000,
                    }}
                    className="hamburger-menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Overlay Menu */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(10, 25, 47, 0.98)', /* Very dark, almost full overlay */
                    zIndex: 998,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '60px', // Offset for fixed navbar
                }} className="mobile-overlay">
                    <button
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'absolute',
                            top: 'var(--spacing-md)',
                            right: 'var(--spacing-md)',
                            background: 'none',
                            border: 'none',
                            fontSize: '2.5rem',
                            color: 'var(--color-text-primary)',
                            cursor: 'pointer',
                        }}
                    >
                        ✕
                    </button>
                    <ul style={{
                        listStyle: 'none',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-lg)',
                    }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href}
                                   onClick={() => setIsOpen(false)} // Close menu on click
                                   style={{
                                       color: 'var(--color-text-primary)',
                                       textDecoration: 'none',
                                       fontFamily: 'var(--font-subheading)',
                                       fontSize: '2rem',
                                       fontWeight: 600,
                                       transition: 'color var(--transition-fast)',
                                   }}
                                   onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                                   onMouseLeave={(e) => e.target.style.color = 'var(--color-text-primary)'}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;