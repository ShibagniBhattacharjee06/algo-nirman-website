// src/components/TimelineSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TimelineSection = () => {
    // Renamed 'details' to 'hackathonInfo' for general info, and added 'scheduleEvents' for detailed timeline
    const hackathonInfo = [
        { label: 'Start Date', value: 'September 6, 2025', icon: '🗓️' },
        { label: 'Duration', value: '30 Hours', icon: '⏱️' },
        { label: 'Prize Pool', value: '₹2,50,000+', icon: '🏆' },
        { label: 'Opportunities', value: 'Internships & Mentorship', icon: '🤝' },
    ];

    const scheduleEvents = [
        { time: 'Day 1: Sep 6', title: 'Opening Ceremony & Keynote', description: 'Kick-off with inspiring words from defense experts and organizers.', icon: '🚀' },
        { time: '10:00 AM', title: 'Hackathon Begins', description: 'Teams begin coding and collaborating on their solutions.', icon: '💻' },
        { time: '12:00 PM', title: 'Lunch Break', description: 'Fuel up for innovation.', icon: '🍔' },
        { time: '02:00 PM', title: 'Workshop: AI in Defense', description: 'Deep dive into machine learning applications for military tech.', icon: '🧠' },
        { time: '05:00 PM', title: 'Mentor Session 1', description: 'Opportunity for teams to get guidance from industry mentors.', icon: '🤝' },
        { time: 'Day 2: Sep 7', title: 'Midnight Grind', description: 'Late-night coding and problem-solving continues.', icon: '🌃' },
        { time: '08:00 AM', title: 'Breakfast', description: 'Recharge for the final push.', icon: '🍳' },
        { time: '10:00 AM', title: 'Submissions Deadline', description: 'All projects must be submitted via the platform.', icon: '✅' },
        { time: '11:00 AM', title: 'Judging Round 1', description: 'Teams present their initial solutions to a panel of judges.', icon: '👨‍⚖️' },
        { time: '02:00 PM', title: 'Final Presentations', description: 'Top teams showcase their refined projects.', icon: '🎤' },
        { time: '04:00 PM', title: 'Closing Ceremony & Awards', description: 'Announcements of winners and felicitation.', icon: '🏅' },
    ];


    return (
        <section id="timeline" style={{ background: 'linear-gradient(to right, var(--color-indian-navy-blue), var(--color-strategic-dark))' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Key Intel & Operational Timeline
                </motion.h2>

                {/* General Hackathon Info */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-md)',
                    justifyContent: 'center',
                    marginBottom: 'var(--spacing-xl)', /* Space before detailed schedule */
                }}>
                    {hackathonInfo.map((detail, index) => (
                        <motion.div
                            key={detail.label}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.15, duration: 0.7 }}
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: 'var(--spacing-md)',
                                borderRadius: 'var(--border-radius-lg)',
                                border: '1px solid rgba(255, 153, 51, 0.2)',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <span style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>{detail.icon}</span>
                            <h3 style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-primary)' }}>{detail.label}</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-saffron-accent)' }}>{detail.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Schedule */}
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-primary)', fontSize: '2.5rem', fontWeight: 700 }}
                    >
                        Detailed Operation Plan
                    </motion.h3>
                    <div style={{ position: 'relative', paddingLeft: '30px' }}>
                        {/* Vertical Line */}
                        <div style={{
                            position: 'absolute',
                            left: '15px',
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: 'var(--color-secondary-accent)', /* Ashoka blue line */
                        }}></div>

                        {scheduleEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.1, duration: 0.7 }}
                                style={{
                                    position: 'relative',
                                    marginBottom: 'var(--spacing-md)',
                                    padding: 'var(--spacing-sm) var(--spacing-md)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: 'var(--border-radius-md)',
                                    borderLeft: '4px solid var(--color-saffron-accent)', /* Saffron bar on the left */
                                    textAlign: 'left',
                                }}
                            >
                                {/* Circle on the line */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-23px',
                                    top: '15px',
                                    width: '18px',
                                    height: '18px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--color-saffron-accent)',
                                    border: '3px solid var(--color-strategic-dark)',
                                }}></div>

                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xs)' }}>
                                    {event.icon} <span style={{ fontWeight: 'bold', color: 'var(--color-light-neutral)' }}>{event.time}</span>
                                </p>
                                <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-xs)' }}>{event.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-light-neutral)' }}>{event.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    style={{ marginTop: 'var(--spacing-lg)', fontSize: '1.1rem', maxWidth: '700px', margin: 'var(--spacing-lg) auto 0 auto', color: 'var(--color-text-secondary)' }}
                >
                    Our mission is to define the focus on real-world challenges and industry-relevant problems, pushing the boundaries of innovation.
                </motion.p>
            </div>
        </section>
    );
};

export default TimelineSection;