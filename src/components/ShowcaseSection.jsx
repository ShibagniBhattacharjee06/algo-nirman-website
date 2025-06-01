import React from 'react';

const ShowcaseSection = () => {
    const projects = [
        { name: "Cyber Defense AI", team: "Team Sentinel", link: "#" },
        { name: "Quantum Secure Messenger", team: "Cryptorangers", link: "#" },
    ];

    return (
        <section id="showcase">
            <h2>Mission Successes</h2>
            <ul>
                {projects.map((p, index) => (
                    <li key={index}>{p.name} by {p.team} - <a href={p.link}>View Project</a></li>
                ))}
            </ul>
        </section>
    );
};

export default ShowcaseSection;