// src/components/SponsorsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SponsorsSection = () => {
    const sponsors = [
        { name: 'Defense Solutions Inc.', logo: 'https://via.placeholder.com/150x80/000080/FFFFFF?text=Defense+Solutions', link: '#', tier: 'Strategic Partner' },
        { name: 'Tech Innovators', logo: 'https://via.placeholder.com/150x80/3A5741/FFFFFF?text=Tech+Innovators', link: '#', tier: 'Innovation Sponsor' },
        { name: 'Future Forge Labs', logo: 'https://via.placeholder.com/150x80/4A4E5C/FFFFFF?text=Future+Forge', link: '#', tier: 'Gold Sponsor' },
        { name: 'CyberSec Elite', logo: 'https://via.placeholder.com/150x80/0C1E3C/FFFFFF?text=CyberSec+Elite', link: '#', tier: 'Gold Sponsor' },
        { name: 'Data Dynamics', logo: 'https://via.placeholder.com/150x80/D4AF37/000000?text=Data+Dynamics', link: '#', tier: 'Silver Sponsor' },
        { name: 'AI Nexus', logo: 'https://via.placeholder.com/150x80/FF9933/000000?text=AI+Nexus', link: '#', tier: 'Silver Sponsor' },
    ];

    // Group sponsors by tier
    const tiers = {
        'Strategic Partner': [],
        'Innovation Sponsor': [],
        'Gold Sponsor': [],
        'Silver Sponsor': [],
        'Community Partner': [] // Example for more tiers
    };

    sponsors.forEach(sponsor => {
        if (tiers[sponsor.tier]) {
            tiers[sponsor.tier].push(sponsor);
        }
    });

    return (
        <section id="sponsors" style={{ background: 'linear-gradient(to bottom, var(--color-indian-navy-blue), var(--color-indian-airforce-grey))', color: 'var(--color-text-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Our Strategic Alliances
                </motion.h2>

                {Object.keys(tiers).map(tierName => (
                    tiers[tierName].length > 0 && (
                        <div key={tierName} style={{ marginBottom: 'var(--spacing-xl)' }}>
                            <motion.h3
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                style={{
                                    fontSize: '2rem',
                                    marginBottom: 'var(--spacing-md)',
                                    color: 'var(--color-text-primary)',
                                    borderBottom: '2px solid var(--color-secondary-accent)', /* Ashoka blue underline */
                                    paddingBottom: 'var(--spacing-sm)',
                                    display: 'inline-block',
                                }}
                            >
                                {tierName}
                            </motion.h3>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: 'var(--spacing-lg)',
                                alignItems: 'center',
                            }}>
                                {tiers[tierName].map((sponsor, index) => (
                                    <motion.a
                                        key={sponsor.name}
                                        href={sponsor.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ delay: index * 0.05, duration: 0.6 }}
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            padding: 'var(--spacing-sm)',
                                            borderRadius: 'var(--border-radius-sm)',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                                            transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            textDecoration: 'none',
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
                                        }}
                                    >
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            style={{ maxWidth: '150px', maxHeight: '80px', filter: 'brightness(0.9) grayscale(0.2)' }}
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    )
                ))}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ marginTop: 'var(--spacing-lg)', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}
                >
                    Interested in partnering with Algo Nirman? <a href="#contact" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Contact us!</a>
                </motion.p>
            </div>
        </section>
    );
};

export default SponsorsSection;