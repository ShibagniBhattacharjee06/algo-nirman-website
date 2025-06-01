import React from 'react';

const TeamFinderSection = () => {
    const participants = [
        { name: "Alex", skills: "Frontend Dev, UI/UX", lookingFor: "Backend Developer" },
        { name: "Jamie", skills: "Blockchain Security", lookingFor: "General AI Expert" },
    ];

    return (
        <section id="team-finder">
            <h2>Squad Up</h2>
            <ul>
                {participants.map((p, index) => (
                    <li key={index}>{p.name} | Skills: {p.skills} | Looking for: {p.lookingFor}</li>
                ))}
            </ul>
        </section>
    );
};

export default TeamFinderSection;