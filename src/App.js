// src/App.js
import React, { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Components
import LoadingScreen from './components/LoadingScreen'; // <--- ADD THIS LINE
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection'; // Renamed from DetailsSection
import TracksSection from './components/TracksSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import AccessibilityMenu from './components/AccessibilityMenu';

// --- ADD THESE NEW IMPORTS FOR NEW SECTIONS ---
import GuestsSection from './components/GuestsSection'; // Will be updated later
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection'; // Will be updated later
import RulesSection from './components/RulesSection'; // <--- NEW SECTION
import SponsorsSection from './components/SponsorsSection'; // <--- NEW SECTION
import RegistrationSection from './components/RegistrationSection'; // <--- NEW SECTION
import TeamFinderSection from './components/TeamFinderSection'; // <--- NEW SECTION
import ResourcesSection from './components/ResourcesSection'; // <--- NEW SECTION
import ShowcaseSection from './components/ShowcaseSection'; // <--- NEW SECTION
// --------------------------------------------------

// Import Global Styles
import './styles/global.css';

// Register GSAP plugins (important to do once)
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const [isLoading, setIsLoading] = useState(true); // <--- ADD THIS STATE

    // Accessibility States
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [isGrayscale, setIsGrayscale] = useState(false);
    const [fontSize, setFontSize] = useState('normal'); // 'normal', 'large', 'xlarge'
    const [isAnimationsDisabled, setIsAnimationsDisabled] = useState(false);

    // Apply accessibility classes to body
    useEffect(() => {
        const body = document.body;
        body.classList.toggle('high-contrast', isHighContrast);
        body.classList.toggle('grayscale', isGrayscale);
        body.classList.toggle('text-large', fontSize === 'large');
        body.classList.toggle('text-xlage', fontSize === 'xlarge');
        body.classList.toggle('animations-disabled', isAnimationsDisabled);
    }, [isHighContrast, isGrayscale, fontSize, isAnimationsDisabled]);

    const toggleHighContrast = useCallback(() => setIsHighContrast(prev => !prev), []);
    const toggleGrayscale = useCallback(() => setIsGrayscale(prev => !prev), []);
    const toggleAnimations = useCallback(() => setIsAnimationsDisabled(prev => !prev), []);

    // Function to call when loading is complete
    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <div className="App">
            {isLoading && <LoadingScreen onLoaded={handleLoadingComplete} />} {/* <--- ADD THIS BLOCK */}

            {/* Only render content when not loading */}
            {!isLoading && (
                <>
                    <Navbar />
                    <HeroSection />
                    <AboutSection />
                    <TimelineSection /> {/* Now a detailed timeline */}
                    <TracksSection />
                    <TeamSection />
                    <GuestsSection /> {/* Will be enhanced */}
                    <RulesSection /> {/* <--- NEW SECTION */}
                    <SponsorsSection /> {/* <--- NEW SECTION */}
                    <FAQSection />
                    <TeamFinderSection /> {/* <--- NEW SECTION */}
                    <ResourcesSection /> {/* <--- NEW SECTION */}
                    <ShowcaseSection /> {/* <--- NEW SECTION */}
                    <ContactSection /> {/* Will be updated for Discord */}
                    <RegistrationSection /> {/* <--- NEW SECTION (placeholder for now) */}
                    <Footer />
                    <AccessibilityMenu
                        isHighContrast={isHighContrast}
                        toggleHighContrast={toggleHighContrast}
                        isGrayscale={isGrayscale}
                        toggleGrayscale={toggleGrayscale}
                        fontSize={fontSize}
                        setFontSize={setFontSize}
                        isAnimationsDisabled={isAnimationsDisabled}
                        toggleAnimations={toggleAnimations}
                    />
                </>
            )}
        </div>
    );
};

export default App;