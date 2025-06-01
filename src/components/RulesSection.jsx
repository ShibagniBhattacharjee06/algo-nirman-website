// src/components/RulesSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RulesSection = () => {
    const rulesCategories = [
        {
            title: "General Conduct & Eligibility",
            icon: "📜",
            rules: [
                "All participants must be registered members of a team.",
                "Teams must consist of 2-4 members.",
                "Participants must be currently enrolled in an educational institution.",
                "Maintain a respectful and inclusive environment.",
                "Cheating, plagiarism, or any form of dishonest behavior will result in immediate disqualification."
            ]
        },
        {
            title: "Project Requirements & Submission",
            icon: "📦",
            rules: [
                "Projects must address a problem within the specified hackathon tracks.",
                "All code must be original and developed during the hackathon period.",
                "Teams must submit their project via the official submission platform by the deadline.",
                "Submissions should include a working prototype, source code, and a brief presentation/demo video."
            ]
        },
        {
            title: "Judging Criteria",
            icon: "⚖️",
            rules: [
                "Innovation & Creativity (25%): Originality and novelty of the solution.",
                "Technicality & Implementation (30%): Code quality, complexity, and functionality.",
                "Impact & Practicality (25%): Potential for real-world application and problem-solving.",
                "Presentation & Demo (20%): Clarity, conciseness, and effectiveness of the pitch."
            ]
        },
        {
            title: "Intellectual Property",
            icon: "🔒",
            rules: [
                "Participants retain full ownership of the intellectual property of their projects.",
                "By submitting, participants grant Algo Nirman organizers the right to showcase their projects for promotional purposes."
            ]
        }
    ];

    // State to manage which accordion item is open
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="rules" style={{ background: 'linear-gradient(to top, var(--color-strategic-dark), var(--color-indian-army-green))', color: 'var(--color-text-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Rules of Engagement
                </motion.h2>

                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
                    {rulesCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.7 }}
                            style={{
                                marginBottom: 'var(--spacing-md)',
                                background: 'rgba(0,0,0,0.2)',
                                borderRadius: 'var(--border-radius-md)',
                                border: '1px solid rgba(255, 193, 7, 0.15)',
                                overflow: 'hidden',
                            }}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                    color: 'var(--color-text-primary)',
                                    fontSize: '1.4rem',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color var(--transition-fast)',
                                    borderBottom: openIndex === index ? '2px solid var(--color-saffron-accent)' : 'none',
                                }}
                            >
                                <span>{category.icon} {category.title}</span>
                                <span>{openIndex === index ? '▲' : '▼'}</span>
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ padding: 'var(--spacing-md)', paddingTop: 'var(--spacing-sm)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    <ul style={{ listStyle: 'disc inside', margin: 0, padding: 0 }}>
                                        {category.rules.map((rule, ruleIndex) => (
                                            <li key={ruleIndex} style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-secondary)' }}>
                                                {rule}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RulesSection;