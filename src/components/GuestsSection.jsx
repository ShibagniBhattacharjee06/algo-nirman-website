// src/components/GuestsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GuestsSection = () => {
    const distinguishedGuests = [
        {
            name: "Dr. Anya Sharma",
            title: "AI Ethics Lead, Defense Ministry",
            bio: "Leading ethical AI development for national security applications. Expertise in secure AI and data privacy.",
            image: "https://via.placeholder.com/150/FF9933/000000?text=A.S", // Placeholder for image
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Col. Vikram Singh (Retd.)",
            title: "Cyber Warfare Strategist",
            bio: "A decorated veteran with extensive experience in cybersecurity operations and digital defense strategy.",
            image: "https://via.placeholder.com/150/0C1E3C/FFFFFF?text=V.S", // Placeholder for image
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Ms. Priya Devi",
            title: "IoT Architect, Space Research Org.",
            bio: "Pioneering secure IoT solutions for aerospace and critical infrastructure monitoring.",
            image: "https://via.placeholder.com/150/3A5741/FFFFFF?text=P.D", // Placeholder for image
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Mr. Rajeev Kumar",
            title: "Founder, Quantum Secure",
            bio: "An entrepreneur revolutionizing cryptography with quantum-resistant algorithms.",
            image: "https://via.placeholder.com/150/4A4E5C/FFFFFF?text=R.K", // Placeholder for image
            linkedin: "#",
            twitter: "#"
        },
    ];

    return (
        <section id="guests" style={{ background: 'var(--color-background-medium)', color: 'var(--color-text-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Distinguished Guests & Tactical Advisors
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'var(--spacing-lg)',
                    justifyContent: 'center',
                }}>
                    {distinguishedGuests.map((guest, index) => (
                        <motion.div
                            key={guest.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.7 }}
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: 'var(--spacing-md)',
                                borderRadius: 'var(--border-radius-lg)',
                                border: '1px solid rgba(255, 193, 7, 0.2)', /* Saffron accent border */
                                boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src={guest.image}
                                alt={guest.name}
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginBottom: 'var(--spacing-sm)',
                                    border: '3px solid var(--color-saffron-accent)',
                                }}
                            />
                            <h3 style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-primary)' }}>{guest.name}</h3>
                            <p style={{ fontSize: '1rem', color: 'var(--color-accent)', marginBottom: 'var(--spacing-sm)' }}>{guest.title}</p>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>{guest.bio}</p>
                            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                {guest.linkedin && (
                                    <a href={guest.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem' }}>
                                        🔗 {/* Or a LinkedIn icon */}
                                    </a>
                                )}
                                {guest.twitter && (
                                    <a href={guest.twitter} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem' }}>
                                        🐦 {/* Or a Twitter icon */}
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GuestsSection;