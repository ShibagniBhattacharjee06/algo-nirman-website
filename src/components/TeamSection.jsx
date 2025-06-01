import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
    return (
        <section id="team" style={{ background: 'linear-gradient(to left, var(--color-indian-army-green), var(--color-strategic-dark))' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Assemble Your Squad
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        background: 'rgba(0,0,0,0.3)',
                        padding: 'var(--spacing-lg)',
                        borderRadius: 'var(--border-radius-lg)',
                        border: '1px solid rgba(255, 153, 51, 0.2)', /* Saffron accent border */
                        boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
                        maxWidth: '800px',
                        margin: '0 auto',
                    }}
                >
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-primary)' }}>
                        Teams of 2-4 Members 👥
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
                        Participants of all skill levels welcome: From beginners to seasoned developers, Algo Nirman is designed for everyone to learn, grow, and innovate.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;