import React from 'react';
import { motion } from 'framer-motion';

const TracksSection = () => {
    const tracks = [
        { name: 'Web Development', icon: '🌐', description: 'Building the next generation of secure and intuitive web applications for defense.' },
        { name: 'IoT', icon: '📡', description: 'Innovating connected devices and sensor networks for enhanced situational awareness.' },
        { name: 'AI/ML', icon: '🧠', description: 'Developing intelligent algorithms for data analysis, autonomous systems, and predictive capabilities.' },
        { name: 'Mobile', icon: '📱', description: 'Crafting robust and secure mobile solutions for operational efficiency.' },
        { name: 'Blockchain', icon: '🔗', description: 'Exploring decentralized ledgers for secure communication and data integrity.' },
        { name: 'Cybersecurity', icon: '🔒', description: 'Fortifying digital defenses against emerging threats and vulnerabilities.' },
    ];

    return (
        <section id="tracks" style={{ background: 'linear-gradient(to top, var(--color-indian-airforce-grey), var(--color-indian-navy-blue))' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Strategic Domains
                </motion.h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'var(--spacing-md)',
                    justifyContent: 'center'
                }}>
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: 'var(--spacing-md)',
                                borderRadius: 'var(--border-radius-lg)',
                                border: '1px solid rgba(255, 153, 51, 0.2)', /* Saffron accent border */
                                boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast)',
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 12px 40px rgba(0,0,0,0.7)',
                                borderColor: 'var(--color-saffron-accent)', /* Saffron accent on hover */
                            }}
                        >
                            <span style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>{track.icon}</span>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-primary)' }}>{track.name}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{track.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TracksSection;