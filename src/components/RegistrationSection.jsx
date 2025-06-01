import React, { useState } from 'react';

const RegistrationSection = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <section id="registration">
            <h2>Initiate Mission Brief</h2>
            <div>
                {step === 1 && <p>Step 1: Enter personal details.</p>}
                {step === 2 && <p>Step 2: Team formation or individual participation.</p>}
                {step === 3 && <p>Step 3: Agree to event rules and finalize application.</p>}
            </div>
            <button onClick={prevStep} disabled={step === 1}>Previous</button>
            <button onClick={nextStep} disabled={step === 3}>Next</button>
        </section>
    );
};

export default RegistrationSection;