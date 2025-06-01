import React from 'react';

const ResourcesSection = () => {
    const resources = [
        { name: "AI Ethics Guidelines", link: "#" },
        { name: "Secure IoT Development", link: "#" },
        { name: "Quantum Cryptography Guide", link: "#" },
    ];

    return (
        <section id="resources">
            <h2>Intel Briefings</h2>
            <ul>
                {resources.map((r, index) => (
                    <li key={index}><a href={r.link}>{r.name}</a></li>
                ))}
            </ul>
        </section>
    );
};

export default ResourcesSection;