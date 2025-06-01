import React from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
    const faqs = [
        { question: "Who can participate?", answer: "Students from all engineering disciplines are welcome. Teams of 2-4 are encouraged." },
        { question: "Is there a registration fee?", answer: "No, participation in Algo Nirman is completely free." },
        { question: "What resources will be provided?", answer: "Mentorship, workshops, food, and prizes will be provided throughout the hackathon." },
        { question: "Can I participate remotely?", answer: "Algo Nirman is an in-person event to foster collaboration and immersive experience." }
    ];

    return (
        <section id="faq" style={{ background: 'var(--color-background-dark)', color: 'var(--color-text-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Frequently Asked Questions
                </motion.h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.7 }}
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: 'var(--spacing-md)',
                                borderRadius: 'var(--border-radius-md)',
                                marginBottom: 'var(--spacing-sm)',
                                border: '1px solid rgba(255, 193, 7, 0.1)',
                            }}
                        >
                            <h3 style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-primary)' }}>Q: {faq.question}</h3>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>A: {faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;