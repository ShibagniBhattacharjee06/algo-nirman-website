import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Uncomment if using GLTF models
import { motion } from 'framer-motion';

const HeroSection = () => {
    const mountRef = useRef(null);
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Three.js Scene Setup
    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        let scene, camera, renderer, object;

        const initThree = () => {
            // Scene
            scene = new THREE.Scene();
            scene.background = null; // Transparent background

            // Camera
            camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
            camera.position.z = 5;

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            currentMount.appendChild(renderer.domElement);

            // Add a simple 3D object (e.g., a Dodecahedron)
            const geometry = new THREE.DodecahedronGeometry(1.5); // Size of the object
            const material = new THREE.MeshPhongMaterial({ color: 0x4A4E5C, flatShading: true }); // Indian Airforce Grey
            object = new THREE.Mesh(geometry, material);
            scene.add(object);

            // Add Lights
            const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 5, 5).normalize();
            scene.add(directionalLight);

            const pointLight = new THREE.PointLight(0xFF9933, 1, 100); // Saffron accent color
            pointLight.position.set(0, 5, -5);
            scene.add(pointLight);

            // Animation Loop
            const animate = () => {
                requestAnimationFrame(animate);
                if (object) {
                    object.rotation.x += 0.002;
                    object.rotation.y += 0.003;
                }
                renderer.render(scene, camera);
            };
            animate();

            // Handle window resize
            const handleResize = () => {
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                if (currentMount && renderer.domElement) {
                    currentMount.removeChild(renderer.domElement);
                }
                renderer.dispose();
                geometry.dispose();
                material.dispose();
            };
        };

        initThree();
    }, []);

    // Countdown Timer Logic (assuming same target date)
    useEffect(() => {
        const targetDate = new Date('September 6, 2025 00:00:00 GMT+0530').getTime(); // IST (GMT+5:30)

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference < 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        };

        setCountdown(calculateTimeLeft()); // Initial calculation
        const timer = setInterval(() => {
            setCountdown(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" style={{ background: 'linear-gradient(to right top, var(--color-strategic-dark), var(--color-indian-navy-blue), var(--color-indian-airforce-grey))' }}>
            <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}></div>
            <div className="container" style={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ fontSize: '4.5rem', marginBottom: 'var(--spacing-md)', textShadow: '0 0 15px rgba(255, 153, 51, 0.5)' }} /* Saffron text shadow */
                >
                    Algo Nirman
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-subheading)', color: 'var(--color-text-secondary)' }}
                >
                    Forge the Future of Defense Tech
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}
                >
                    {Object.entries(countdown).map(([unit, value]) => (
                        <div key={unit} style={{
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            padding: 'var(--spacing-sm) var(--spacing-md)',
                            borderRadius: 'var(--border-radius-md)',
                            minWidth: '100px',
                            textAlign: 'center',
                            border: '1px solid rgba(255, 153, 51, 0.3)', /* Saffron accent border */
                            fontFamily: 'monospace',
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            color: 'var(--color-saffron-accent)' /* Saffron accent color */
                        }}>
                            {String(value).padStart(2, '0')}
                            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>{unit}</p>
                        </div>
                    ))}
                </motion.div>
                <motion.a
                    href="#register"
                    className="button"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                >
                    Register Now
                </motion.a>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    style={{ marginTop: 'var(--spacing-md)', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}
                >
                    A National-Level Hackathon by Vectorix Community
                </motion.p>
            </div>
        </section>
    );
};

export default HeroSection;